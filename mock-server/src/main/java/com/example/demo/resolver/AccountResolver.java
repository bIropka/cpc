package com.example.demo.resolver;


import com.example.demo.repository.mongodb.AccountRepository;
import com.example.demo.repository.mongodb.connection.CursorUtil;
import com.example.demo.repository.mongodb.model.Account;
import com.mongodb.lang.Nullable;
import graphql.kickstart.tools.GraphQLQueryResolver;
import graphql.relay.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class AccountResolver implements GraphQLQueryResolver {

    private final AccountRepository accountRepository;
    private final CursorUtil cursorUtil;

    public Connection<Account> accounts(int pageSize, @Nullable String cursor){
        List<Edge<Account>> edges = getAccounts(cursor).stream()
                .map(account -> new DefaultEdge<>(account, cursorUtil.from(account.getId())))
                .limit(pageSize)
                .collect(Collectors.toUnmodifiableList());

        ConnectionCursor startCursor = cursorUtil.getFirstCursorFrom(edges);
        ConnectionCursor lastCursor = cursorUtil.getLastCursorFrom(edges);
        DefaultPageInfo pageInfo = new DefaultPageInfo(
                startCursor,
                lastCursor,
                cursor!=null,
                edges.size() >= pageSize);

        return new DefaultConnection<>(edges, pageInfo);
    }

    public Account getAccount(String id){
        Optional<Account> account = accountRepository.findById(id);
        if (account.isEmpty()){
            return null;
        }
        return account.get();
    }

    public List<Account> getAccounts(@Nullable String cursor){
        if (cursor == null){
            return accountRepository.findAll();
        }
        return accountRepository.findAll()
                .stream()
                .dropWhile(account -> account.getId().compareTo(cursorUtil.fromCursor(cursor)) !=1)
                .collect(Collectors.toUnmodifiableList());
    }
}

package com.example.demo.repository.mongodb;

import com.example.demo.repository.mongodb.model.Account;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface AccountRepository extends MongoRepository<Account, String> {

    @Query("{ 'id' : ?0 }")
    Optional<Account> findById(String id);
}

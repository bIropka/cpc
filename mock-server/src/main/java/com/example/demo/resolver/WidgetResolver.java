package com.example.demo.resolver;


import com.example.demo.repository.mongodb.WidgetRepository;
import com.example.demo.repository.mongodb.model.Widget;
import graphql.kickstart.tools.GraphQLQueryResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class WidgetResolver implements GraphQLQueryResolver {

    private final WidgetRepository widgetRepository;


    public Iterable<Widget> findAllWidgets() {
        return widgetRepository.findAll();
    }


    public long countWidgets() {
        return widgetRepository.count();
    }

}

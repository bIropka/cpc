package com.example.demo.resolver;


import com.example.demo.repository.mongodb.WidgetRepository;
import com.example.demo.repository.mongodb.model.Widget;

import graphql.kickstart.tools.GraphQLMutationResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class WidgetMutation implements GraphQLMutationResolver {
    private final WidgetRepository widgetRepository;

    @Autowired
    public WidgetMutation(WidgetRepository widgetRepository) {
        this.widgetRepository = widgetRepository;
    }

    public Widget createWidget(String type, String fetchDataQuery) {
        Widget widget = new Widget();
        widget.setType(type);
        widget.setFetchDataQuery(fetchDataQuery);

        widgetRepository.save(widget);

        return widget;
    }
}

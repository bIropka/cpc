package com.example.demo.repository.mongodb.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "widgets")
@Data
@NoArgsConstructor
public class Widget {
    @Id
    private String id;
    private String type;
    private String fetchDataQuery;


    public Widget(String id) {
        this.id = id;
    }

    public Widget(String type, String fetchDataQuery) {
        this.type = type;
        this.fetchDataQuery = fetchDataQuery;
    }
}

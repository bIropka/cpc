package com.example.demo.repository.mongodb;

import com.example.demo.repository.mongodb.model.Widget;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface WidgetRepository extends MongoRepository<Widget, String> {
}

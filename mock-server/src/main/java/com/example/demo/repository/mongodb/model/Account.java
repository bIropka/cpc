package com.example.demo.repository.mongodb.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "account")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Account {
    @Id
    private String id;
    private String Name;
    private Double Balance;
    private String Currency;
    private Double Mrr;
    private String LastInvoiceDate;
    private String Status;
    private Parent Parent;
    private BillTo BillTo;
    private String PaymentTerm;
}

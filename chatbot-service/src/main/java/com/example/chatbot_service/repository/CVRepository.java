package com.example.chatbot_service.repository;

import com.example.chatbot_service.model.CV;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CVRepository extends MongoRepository<CV, String> {
    // Tu peux ajouter des méthodes personnalisées ici si besoin
}

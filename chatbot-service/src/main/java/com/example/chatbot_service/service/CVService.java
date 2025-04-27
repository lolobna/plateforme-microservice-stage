package com.example.chatbot_service.service;

import com.example.chatbot_service.model.CV;
import com.example.chatbot_service.repository.CVRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class CVService {

    @Autowired
    private CVRepository cvRepository;

    // Sauvegarder un CV et l'offre dans MongoDB
    public CV saveCV(CV cv) {
        return cvRepository.save(cv);
    }

    // Récupérer un CV par son ID
    public Optional<CV> getCVById(String id) {
        return cvRepository.findById(id);
    }

    // Ajouter une compétence au CV existant
    public CV addCompetenceToCV(String id, String competence) {
        Optional<CV> cvOptional = cvRepository.findById(id);
        if (cvOptional.isPresent()) {
            CV cv = cvOptional.get();
            cv.getCompetences().add(competence);
            return cvRepository.save(cv);
        }
        return null;
    }
}



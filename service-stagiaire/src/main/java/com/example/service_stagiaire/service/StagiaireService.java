package com.example.service_stagiaire.service;

import com.example.service_stagiaire.model.*;
import com.example.service_stagiaire.repository.StagiaireRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StagiaireService {
    private final StagiaireRepository repository;

    public StagiaireService(StagiaireRepository repository) {
        this.repository = repository;
    }

    public List<Stagiaire> getAllStagiaires() {
        return repository.findAll();
    }

    public Optional<Stagiaire> getStagiaireById(String id) {
        return repository.findById(id);
    }

    public Stagiaire createStagiaire(Stagiaire stagiaire) {
        return repository.save(stagiaire);
    }

    public Stagiaire updateStagiaire(String id, Stagiaire stagiaireDetails) {
        return repository.findById(id)
                .map(stagiaire -> {
                    stagiaire.setFullName(stagiaireDetails.getFullName());
                    stagiaire.setEmail(stagiaireDetails.getEmail()); // Ajouté
                    stagiaire.setDateNaissance(stagiaireDetails.getDateNaissance()); // Ajouté
                    stagiaire.setPhone(stagiaireDetails.getPhone());
                    stagiaire.setAddress(stagiaireDetails.getAddress());
                    stagiaire.setUniversity(stagiaireDetails.getUniversity());
                    stagiaire.setEducationLevel(stagiaireDetails.getEducationLevel());
                    stagiaire.setCv(stagiaireDetails.getCv());
                    stagiaire.setDescription(stagiaireDetails.getDescription());
                    stagiaire.setProfilePhoto(stagiaireDetails.getProfilePhoto());
                    stagiaire.setPortfolioLink(stagiaireDetails.getPortfolioLink());
                    stagiaire.setDomain(stagiaireDetails.getDomain());
                    stagiaire.setLanguages(stagiaireDetails.getLanguages());
                    stagiaire.setProjets(stagiaireDetails.getProjets());
                    stagiaire.setCompetences(stagiaireDetails.getCompetences());
                    stagiaire.setExperiences(stagiaireDetails.getExperiences());
                    return repository.save(stagiaire);
                })
                .orElseThrow(() -> new RuntimeException("Stagiaire non trouvé"));
    }

    public void deleteStagiaire(String id) {
        repository.deleteById(id);
    }

    
}
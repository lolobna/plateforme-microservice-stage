package com.example.service_stagiaire.service;

import com.example.service_stagiaire.model.Projet;
import com.example.service_stagiaire.model.Stagiaire;
import com.example.service_stagiaire.repository.StagiaireRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ProjetService {

    private final StagiaireRepository repository;

    public ProjetService(StagiaireRepository repository) {
        this.repository = repository;
    }

    public Stagiaire addProjetToStagiaire(String stagiaireId, Projet projet) {
        Optional<Stagiaire> stagiaireById = repository.findById(stagiaireId);
        if (stagiaireById.isPresent()) {
            Stagiaire stagiaire = stagiaireById.get();
            if (projet.getIdProjet() == null || projet.getIdProjet().isEmpty()) {
                projet.setIdProjet(UUID.randomUUID().toString());
            }
            stagiaire.getProjets().add(projet);
            return repository.save(stagiaire);
        }
        return null;
    }

    public List<Projet> getProjetsOfStagiaire(String stagiaireId) {
        Optional<Stagiaire> stagiaireOpt = repository.findById(stagiaireId);
        return stagiaireOpt.map(Stagiaire::getProjets).orElse(null);
    }

    public Stagiaire updateProjetOfStagiaire(String stagiaireId, String projetId, Projet updatedProjet) {
        Optional<Stagiaire> stagiaireOpt = repository.findById(stagiaireId);
        if (stagiaireOpt.isPresent()) {
            Stagiaire stagiaire = stagiaireOpt.get();
            List<Projet> projets = stagiaire.getProjets();
            for (Projet projet : projets) {
                if (projet.getIdProjet().equals(projetId)) {
                    projet.setIdProjet(projetId);
                    projet.setTitle(updatedProjet.getTitle());
                    projet.setDescription(updatedProjet.getDescription());
                    projet.setProjetImg(updatedProjet.getProjetImg());
                    return repository.save(stagiaire);
                }
            }
        }
        return null;
    }

    public Stagiaire removeProjetFromStagiaire(String stagiaireId, String projetId) {
        Optional<Stagiaire> stagiaireOpt = repository.findById(stagiaireId);
        if (stagiaireOpt.isPresent()) {
            Stagiaire stagiaire = stagiaireOpt.get();
            List<Projet> projets = stagiaire.getProjets();
            projets.removeIf(projet -> projet.getIdProjet().equals(projetId));
            return repository.save(stagiaire);
        }
        return null;
    }
}

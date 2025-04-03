package com.example.service_stagiaire.service;

import com.example.service_stagiaire.model.Language;
import com.example.service_stagiaire.model.Projet;
import com.example.service_stagiaire.model.Stagiaire;
import com.example.service_stagiaire.repository.StagiaireRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

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

    //=================LANGUAGE=========================//
    // Ajouter un langage à un stagiaire
    public Stagiaire addLanguageToStagiaire(String stagiaireId, Language language) {
        Optional<Stagiaire> stagiaireByid = repository.findById(stagiaireId);
        if (stagiaireByid.isPresent()) {
            Stagiaire stagiaire = stagiaireByid.get();

            stagiaire.getLanguages().add(language);
            return repository.save(stagiaire);
        }
        return null;
    }


    // Récupérer tous les langages d'un stagiaire
    public List<Language> getLanguagesOfStagiaire(String stagiaireId) {
        Optional<Stagiaire> stagiaireOpt = repository.findById(stagiaireId);
        return stagiaireOpt.map(Stagiaire::getLanguages).orElse(null);
    }

    // Mettre à jour un langage d'un stagiaire
    public Stagiaire updateLanguageOfStagiaire(String stagiaireId, String language, Language updatedLanguage) {
        Optional<Stagiaire> stagiaireOpt = repository.findById(stagiaireId);
        if (stagiaireOpt.isPresent()) {
            Stagiaire stagiaire = stagiaireOpt.get();
            List<Language> languages = stagiaire.getLanguages();
            for (Language lang : languages) {
                if (lang.getLanguage().equals(language)) {
                    lang.setLanguage(updatedLanguage.getLanguage());
                    lang.setLevel(updatedLanguage.getLevel());
                    return repository.save(stagiaire);
                }
            }
        }
        return null;
    }

    // Supprimer un langage d'un stagiaire
    public Stagiaire removeLanguageFromStagiaire(String stagiaireId, String languageId) {
        Optional<Stagiaire> stagiaireOpt = repository.findById(stagiaireId);
        if (stagiaireOpt.isPresent()) {
            Stagiaire stagiaire = stagiaireOpt.get();
            List<Language> languages = stagiaire.getLanguages();
            languages.removeIf(lang -> lang.getLanguage().equals(languageId));
            return repository.save(stagiaire);
        }
        return null;
    }

    //==============================PROJET=======================================//
    // Ajouter un projet à un stagiaire
    public Stagiaire addProjetToStagiaire(String stagiaireId, Projet projet) {
        Optional<Stagiaire> stagiaireById = repository.findById(stagiaireId);
        if (stagiaireById.isPresent()) {
            Stagiaire stagiaire = stagiaireById.get();

            // Vérifie si le projet n'a pas d'ID et en génère un
            if (projet.getIdProjet() == null || projet.getIdProjet().isEmpty()) {
                projet.setIdProjet(UUID.randomUUID().toString());
            }

            stagiaire.getProjets().add(projet);
            return repository.save(stagiaire);
        }
        return null;
    }


    // Récupérer tous les projets d'un stagiaire
    public List<Projet> getProjetsOfStagiaire(String stagiaireId) {
        Optional<Stagiaire> stagiaireOpt = repository.findById(stagiaireId);
        return stagiaireOpt.map(Stagiaire::getProjets).orElse(null);
    }

    // Mettre à jour un projet d'un stagiaire
    public Stagiaire updateProjetOfStagiaire(String stagiaireId, String projetId, Projet updatedProjet) {
        Optional<Stagiaire> stagiaireOpt = repository.findById(stagiaireId);
        if (stagiaireOpt.isPresent()) {
            Stagiaire stagiaire = stagiaireOpt.get();
            List<Projet> projets = stagiaire.getProjets();
            for (Projet projet : projets) {
                if (projet.getIdProjet().equals(projetId)) {
                    projet.setTitle(updatedProjet.getTitle());
                    projet.setDescription(updatedProjet.getDescription());
                    projet.setProjetImg(updatedProjet.getProjetImg());
                    return repository.save(stagiaire);
                }
            }
        }
        return null;
    }

    // Supprimer un projet d'un stagiaire
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

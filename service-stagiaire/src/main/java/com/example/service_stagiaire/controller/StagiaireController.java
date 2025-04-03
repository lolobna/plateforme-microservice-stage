package com.example.service_stagiaire.controller;

import com.example.service_stagiaire.model.Experience;
import com.example.service_stagiaire.model.Language;
import com.example.service_stagiaire.model.Projet;
import com.example.service_stagiaire.model.Stagiaire;
import com.example.service_stagiaire.service.StagiaireService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stagiaires")
public class StagiaireController {

    private final StagiaireService service;

    public StagiaireController(StagiaireService service) {
        this.service = service;
    }

    @GetMapping
    public List<Stagiaire> getAll() {
        return service.getAllStagiaires();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Stagiaire> getById(@PathVariable String id) {
        return service.getStagiaireById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Stagiaire create(@RequestBody Stagiaire stagiaire) {
        return service.createStagiaire(stagiaire);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Stagiaire> update(@PathVariable String id, @RequestBody Stagiaire stagiaireDetails) {
        return ResponseEntity.ok(service.updateStagiaire(id, stagiaireDetails));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        service.deleteStagiaire(id);
        return ResponseEntity.noContent().build();
    }

    //==============================LANGUAGE========================//
    // Ajouter un langage à un stagiaire
    @PostMapping("/{stagiaireId}/languages")
    public ResponseEntity<Language> addLanguage(@PathVariable String stagiaireId, @RequestBody Language language) {
        Stagiaire updatedStagiaire = service.addLanguageToStagiaire(stagiaireId, language);
        if (updatedStagiaire != null) {
            return ResponseEntity.status(201).body(language);
        }
        return ResponseEntity.status(404).body(null);
    }

    // Obtenir les langages d'un stagiaire
    @GetMapping("/{stagiaireId}/languages")
    public ResponseEntity<List<Language>> getLanguages(@PathVariable String stagiaireId) {
        List<Language> languages = service.getLanguagesOfStagiaire(stagiaireId);
        if (languages != null) {
            return ResponseEntity.ok(languages);
        }
        return ResponseEntity.status(404).body(null);
    }

    // Mettre à jour un langage d'un stagiaire
    @PutMapping("/{stagiaireId}/languages/{language}")
    public ResponseEntity<Language> updateLanguage(@PathVariable String stagiaireId, @PathVariable String language, @RequestBody Language updatedLanguage) {
        Stagiaire updatedStagiaire = service.updateLanguageOfStagiaire(stagiaireId, language, updatedLanguage);
        if (updatedStagiaire != null) {
            return ResponseEntity.ok(updatedLanguage);
        }
        return ResponseEntity.status(404).body(null);
    }


    // Supprimer un langage d'un stagiaire
    @DeleteMapping("/{stagiaireId}/languages/{languageId}")
    public ResponseEntity<Void> deleteLanguage(@PathVariable String stagiaireId, @PathVariable String language) {
        Stagiaire updatedStagiaire = service.removeLanguageFromStagiaire(stagiaireId, language);
        if (updatedStagiaire != null) {
            return ResponseEntity.status(204).build(); // No Content
        }
        return ResponseEntity.status(404).build();
    }

    //===========================================PROJET===============================================//
    // Ajouter un projet à un stagiaire
    @PostMapping("/{stagiaireId}/projets")
    public ResponseEntity<Projet> addProjet(@PathVariable String stagiaireId, @RequestBody Projet projet) {
        Stagiaire updatedStagiaire = service.addProjetToStagiaire(stagiaireId, projet);
        if (updatedStagiaire != null) {
            return ResponseEntity.ok(projet);
        }
        return ResponseEntity.status(404).body(null);
    }

    // Récupérer tous les projets d'un stagiaire
    @GetMapping("/{stagiaireId}/projets")
    public ResponseEntity<List<Projet>> getProjets(@PathVariable String stagiaireId) {
        List<Projet> projets = service.getProjetsOfStagiaire(stagiaireId);
        if (projets != null) {
            return ResponseEntity.ok(projets);
        }
        return ResponseEntity.status(404).body(null);
    }

    // Mettre à jour un projet d'un stagiaire
    @PutMapping("/{stagiaireId}/projets/{projetId}")
    public ResponseEntity<Projet> updateProjet(@PathVariable String stagiaireId, @PathVariable String projetId, @RequestBody Projet updatedProjet) {
        Stagiaire updatedStagiaire = service.updateProjetOfStagiaire(stagiaireId, projetId, updatedProjet);
        if (updatedStagiaire != null) {
            return ResponseEntity.ok(updatedProjet);
        }
        return ResponseEntity.status(404).body(null);
    }

    // Supprimer un projet d'un stagiaire
    @DeleteMapping("/{stagiaireId}/projets/{projetId}")
    public ResponseEntity<Void> deleteProjet(@PathVariable String stagiaireId, @PathVariable String projetId) {
        Stagiaire updatedStagiaire = service.removeProjetFromStagiaire(stagiaireId, projetId);
        if (updatedStagiaire != null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.status(404).build();
    }

    //===========================================EXPERIENCE===============================================//
    // Ajouter une expérience à un stagiaire
    @PostMapping("/{stagiaireId}/experiences")
    public ResponseEntity<Experience> addExperience(@PathVariable String stagiaireId, @RequestBody Experience experience) {
        Stagiaire updatedStagiaire = service.addExperienceToStagiaire(stagiaireId, experience);
        if (updatedStagiaire != null) {
            return ResponseEntity.ok(experience);
        }
        return ResponseEntity.status(404).body(null);
    }

    // Récupérer toutes les expériences d'un stagiaire
    @GetMapping("/{stagiaireId}/experiences")
    public ResponseEntity<List<Experience>> getExperiences(@PathVariable String stagiaireId) {
        List<Experience> experiences = service.getExperiencesOfStagiaire(stagiaireId);
        if (experiences != null) {
            return ResponseEntity.ok(experiences);
        }
        return ResponseEntity.status(404).body(null);
    }

    // Mettre à jour une expérience d'un stagiaire
    @PutMapping("/{stagiaireId}/experiences/{experienceId}")
    public ResponseEntity<Experience> updateExperience(@PathVariable String stagiaireId, @PathVariable String experienceId, @RequestBody Experience updatedExperience) {
        Stagiaire updatedStagiaire = service.updateExperienceOfStagiaire(stagiaireId, experienceId, updatedExperience);
        if (updatedStagiaire != null) {
            return ResponseEntity.ok(updatedExperience);
        }
        return ResponseEntity.status(404).body(null);
    }

    // Supprimer une expérience d'un stagiaire
    @DeleteMapping("/{stagiaireId}/experiences/{experienceId}")
    public ResponseEntity<Void> deleteExperience(@PathVariable String stagiaireId, @PathVariable String experienceId) {
        Stagiaire updatedStagiaire = service.removeExperienceFromStagiaire(stagiaireId, experienceId);
        if (updatedStagiaire != null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.status(404).build();
    }


}

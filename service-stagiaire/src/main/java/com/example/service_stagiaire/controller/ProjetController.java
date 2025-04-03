package com.example.service_stagiaire.controller;

import com.example.service_stagiaire.model.*;
import com.example.service_stagiaire.service.ProjetService;
import com.example.service_stagiaire.service.StagiaireService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stagiaires/{stagiaireId}/projets")
public class ProjetController {

    private final ProjetService service;

    public ProjetController(ProjetService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Projet> addProjet(@PathVariable String stagiaireId, @RequestBody Projet projet) {
        Stagiaire updatedStagiaire = service.addProjetToStagiaire(stagiaireId, projet);
        if (updatedStagiaire != null) {
            return ResponseEntity.status(201).body(projet);
        }
        return ResponseEntity.status(404).body(null);
    }

    @GetMapping
    public ResponseEntity<List<Projet>> getProjets(@PathVariable String stagiaireId) {
        List<Projet> projets = service.getProjetsOfStagiaire(stagiaireId);
        if (projets != null) {
            return ResponseEntity.ok(projets);
        }
        return ResponseEntity.status(404).body(null);
    }

    @PutMapping("/{projetId}")
    public ResponseEntity<Projet> updateProjet(@PathVariable String stagiaireId, @PathVariable String projetId, @RequestBody Projet updatedProjet) {
        Stagiaire updatedStagiaire = service.updateProjetOfStagiaire(stagiaireId, projetId, updatedProjet);
        if (updatedStagiaire != null) {
            return ResponseEntity.ok(updatedProjet);
        }
        return ResponseEntity.status(404).body(null);
    }

    @DeleteMapping("/{projetId}")
    public ResponseEntity<Void> deleteProjet(@PathVariable String stagiaireId, @PathVariable String projetId) {
        Stagiaire updatedStagiaire = service.removeProjetFromStagiaire(stagiaireId, projetId);
        if (updatedStagiaire != null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.status(404).build();
    }
}

package com.example.service_stagiaire.controller;

import com.example.service_stagiaire.model.*;
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

    // Opérations CRUD de base
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


}
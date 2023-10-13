package com.nocountry.c1424mjava.controller;

import com.nocountry.c1424mjava.dto.ProductoDto;
import org.springframework.web.bind.annotation.*;
import com.nocountry.c1424mjava.model.Producto;
import com.nocountry.c1424mjava.service.ProductoService;

import java.util.List;

@RestController
@RequestMapping("/productos")
public class ProductoController {
    private final ProductoService productoService;

    public ProductoController(ProductoService productoService) {
        this.productoService = productoService;
    }

    @PostMapping
    public Producto createProducto(@RequestBody ProductoDto productoDto) {
        return productoService.createProducto(productoDto);
    }

    @PutMapping("/{id}")
    public Producto updateProducto(@PathVariable int id, @RequestBody ProductoDto productoDto) {
        return productoService.updateProducto(id, productoDto);
    }

    @DeleteMapping("/{id}")
    public void deleteProducto(@PathVariable int id) {
        productoService.deleteProducto(id);
    }

    @GetMapping("/{id}")
    public Producto getProducto(@PathVariable int id) {
        return productoService.getProducto(id);
    }

    @GetMapping
    public List<Producto> getAllProductos() {
        return productoService.getAllProductos();
    }
}

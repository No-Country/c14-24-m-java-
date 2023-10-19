package com.nocountry.c1424mjava.controller;

import com.nocountry.c1424mjava.dto.ProductoDto;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import com.nocountry.c1424mjava.model.Producto;
import com.nocountry.c1424mjava.service.ProductoService;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/productos")
public class ProductoController {
    private final ProductoService productoService;

    public ProductoController(ProductoService productoService) {
        this.productoService = productoService;
    }


    @GetMapping("/crear_productos.html")
    public String mostrarFormulario() {

        return "crear_productos.html";
    }

    @PostMapping("/crear_productos.html")
    public String createProducto(@ModelAttribute("Producto") ProductoDto productoDto,
                                 @RequestParam("imagen") MultipartFile imagen) {
        try {
            Producto producto = productoService.createProducto(productoDto, imagen);
            return "redirect:/productos/lista_productos.html";
        } catch (IOException e) {
            return "redirection:/lista_productos";
        }

    }

    @PutMapping("actualizar_producto/{id}")
    public String updateProducto(@PathVariable int id,
                                 @ModelAttribute("Producto") ProductoDto productoDto,
                                 @RequestParam("imagen") MultipartFile imagen) {
        try {
            Producto producto = productoService.updateProducto(id, productoDto, imagen);
            return "redirect:/productos";
        } catch (IOException e) {
            return "redirection:/lista_productos";
        }
    }

    @DeleteMapping("eliminar_producto/{id}")
    public String deleteProducto(@PathVariable int id) {
        productoService.deleteProducto(id);
        return "redirect:/productos";
    }

    @GetMapping("productos/{id}")
    public String getProducto(@PathVariable int id, ModelMap model) {
        Producto producto = productoService.getProducto(id);
        model.addAttribute("Producto", producto);
        return "lista_productos";
    }

    @GetMapping("/lista_productos.html")
    public String getAllProductos(ModelMap model) {
        List<Producto> productos = productoService.getAllProductos();
        model.addAttribute("Producto", productos);
        return "lista_productos";
    }
}
package com.nocountry.c1424mjava.service;

import com.nocountry.c1424mjava.dto.ProductoDto;
import com.nocountry.c1424mjava.model.Producto;

import java.util.List;

public interface ProductoService {
    Producto createProducto(ProductoDto productoDTO);
    Producto updateProducto(int id, ProductoDto productoDTO);
    void deleteProducto(int id);
    Producto getProducto(int id);
    List<Producto> getAllProductos();
}

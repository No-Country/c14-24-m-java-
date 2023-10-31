package com.nocountry.c1424mjava.dto;


import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;

@Data
public class ProductoDto {
   @NotBlank
    private String nombre;
   @NotBlank
    private String descripcion;
   @NotBlank
    private BigDecimal precioUnitario;
    @NotBlank
    private String categoria;
   @NotBlank
    private int stock;
   @NotBlank
    private MultipartFile imagen;

}
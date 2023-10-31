package com.nocountry.c1424mjava.model;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;

@Entity @Data @Table(name = "detalle_pedido")
public class DetallePedido {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_detalle_pedido;
    @Column(name = "id_pedido")
    private Integer fk_id_pedido;
    @Column(name = "id_producto")
    private Integer fk_id_producto;
    @Column(name = "cantidad")
    private Integer cantidad;
    @Column(name = "precio_total")
    private BigDecimal precioTotal;
    @Column(name = "precio_envio")
    private BigDecimal precio_envio;
    
}

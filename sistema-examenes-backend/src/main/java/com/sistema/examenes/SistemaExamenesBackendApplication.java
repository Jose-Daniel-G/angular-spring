package com.sistema.examenes;

import com.sistema.examenes.entidades.Rol;
import com.sistema.examenes.entidades.Usuario;
import com.sistema.examenes.entidades.UsuarioRol;
import com.sistema.examenes.servicios.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class SistemaExamenesBackendApplication implements CommandLineRunner {
	@Autowired
	private UsuarioService usuarioService;
	public static void main(String[] args) {
		SpringApplication.run(SistemaExamenesBackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
//		Usuario usuario = new Usuario();
//		usuario.setNombre("Jose");
//		usuario.setApellido("Grijalba");
//		usuario.setUsername("kleizz");
//		usuario.setPassword("12345");
//		usuario.setEmail("jose.grijalba04@gmail.com");
//		usuario.setTelefono("3147072792");
//		usuario.setPerfil("Foto.png");
//
//		Rol rol = new Rol();
//		rol.setRolid(1L);
//		rol.setNombre("ADMIN");
//
//		Set<UsuarioRol> usuarioRoles = new HashSet<>();
//		UsuarioRol usuarioRol = new UsuarioRol();
//		usuarioRol.setRol(rol);
//		usuarioRol.setUsuario(usuario);
//		usuarioRoles.add(usuarioRol);
//
//		Usuario usuarioGuardado = usuarioService.guardarUsuario(usuario, usuarioRoles);
//		System.out.println(usuarioGuardado.getUsername());
	}
}

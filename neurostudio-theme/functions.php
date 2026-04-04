<?php
/**
 * Funciones y definiciones del tema NeuroStudio Premium
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function neurostudio_scripts() {
    // Fuentes de Google (Outfit y DM Sans)
    wp_enqueue_style( 'google-fonts', 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap', array(), null );

    // Estilos principales (desde assets/css)
    wp_enqueue_style( 'neurostudio-main-style', get_template_directory_uri() . '/assets/css/style.css', array(), '1.0.0' );
    wp_enqueue_style( 'neurostudio-chars-style', get_template_directory_uri() . '/assets/css/chars.css', array(), '1.0.0' );

    // Estilo root del tema (tiene el comentario de info)
    wp_enqueue_style( 'neurostudio-style', get_stylesheet_uri(), array(), '1.0.0' );

    // Calendly script
    wp_enqueue_style( 'calendly-style', 'https://assets.calendly.com/assets/external/widget.css', array(), null );
    wp_enqueue_script( 'calendly-js', 'https://assets.calendly.com/assets/external/widget.js', array(), null, false );

    // Scripts principales (en el footer)
    wp_enqueue_script( 'neurostudio-main', get_template_directory_uri() . '/assets/js/main.js', array(), '1.0.0', true );
    wp_enqueue_script( 'neurostudio-animate', get_template_directory_uri() . '/assets/js/animate.js', array(), '1.0.0', true );
    wp_enqueue_script( 'neurostudio-catalog', get_template_directory_uri() . '/assets/js/catalog.js', array(), '1.0.0', true );

    // Localize Data para el catalog (ejemplo básico para futuras extensiones dinámicas)
    wp_localize_script( 'neurostudio-catalog', 'WP_DATA', array(
        'ajaxurl' => admin_url( 'admin-ajax.php' )
    ) );
}
add_action( 'wp_enqueue_scripts', 'neurostudio_scripts' );

// Soporte del tema
function neurostudio_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'menus' );

    register_nav_menus( array(
        'primary' => __( 'Menú Principal', 'neurostudio' ),
    ) );
}
add_action( 'after_setup_theme', 'neurostudio_setup' );

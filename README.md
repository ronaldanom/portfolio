# Monje en Apuros: Juego de Aventura con Física Dinámica y Reconocimiento de Voz

## Descripción del Proyecto

**Monje en Apuros** es un juego de aventura interactivo que explora la mecánica de un espía con el poder de **copiar objetos** a su alrededor, **modificar las leyes de la realidad** según su estado y manipular el **comportamiento físico** de la computadora. El juego está basado en un reto de **pixel art** y utiliza herramientas a medida como **cámara**, **menús interactivos con el mouse**, **tazas de refresco** como íconos y **hotkeys** para mejorar la experiencia.

### Características del Juego:
- **Cámara personalizada** para moverse por el escenario.
- **Pixel art a medida** para el entorno y personajes.
- **Menú interactivo** utilizando el mouse y teclas rápidas.
- **Herramienta de segundo plano** con un **grado de translucidez**.
- **Sistema de horarios internos** basado en "coach sessions" que afectan el comportamiento del juego.
- **Protección dinámica** contra el frío dependiendo del estado térmico de la computadora.

### Objetivo del Juego:
En el juego, los jugadores asumen el rol de un espía con habilidades únicas para interactuar con el entorno. Al copiar objetos, modificar la realidad y adaptarse a las condiciones del ambiente (como la temperatura de la computadora), los jugadores deben superar obstáculos y resolver acertijos en una serie de niveles desafiantes.

## Proyecto de Instituto

Este proyecto fue presentado como parte de mis estudios en el primer año de la universidad y fue elogiado por el director debido a su originalidad y las innovaciones técnicas que implementa, como la integración de física computacional y herramientas personalizadas para la manipulación de gráficos 2D.

![Monje en Apuros](assets/img)

---

## IA de Reconocimiento de Perfiles por Voz

Además del juego, el proyecto incluye una **inteligencia artificial** que es capaz de reconocer perfiles de personas usando una **combinación de características de voz** y **reconocimiento de emociones**. Utilizando redes neuronales avanzadas, la IA identifica patrones de voz y emociones con un **alto rango de precisión (F1 > 84%)** únicamente a partir del sonido.

### Características de la IA:
- **Reconocimiento de voz** y características emocionales.
- **Alta precisión en clasificación** con un F1 superior al 84%.
- **Utiliza escalas de grises y colores** para mejorar la clasificación y el análisis de la voz.

### Funcionalidad:
- La IA toma como entrada **grabaciones de voz** y clasifica el perfil de la persona en función de sus emociones y características vocales.
- Utiliza **redes neuronales convolucionales (CNN)** para reconocer patrones y mejorar continuamente el modelo.

---

## Tecnologías Utilizadas

### Juego - "Monje en Apuros":
- **Java**: Lenguaje principal para el desarrollo del juego.
- **LibGDX**: Framework para crear juegos en 2D.
- **Pixel Art**: Herramientas personalizadas para crear gráficos pixelados.
- **JavaFX** (opcional): Para interfaces gráficas y elementos secundarios.

### IA:
- **Python**: Lenguaje para la implementación de la IA.
- **TensorFlow**: Framework para redes neuronales.
- **Librosa**: Para el análisis de características de audio.
- **OpenCV**: Para el procesamiento de imágenes y escalado de colores.
- **Keras**: Para facilitar la construcción de redes neuronales profundas.

---

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tuusuario/monje-en-apuros.git

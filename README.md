<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:7F00FF,50:00D8FF,100:00FFA3&height=190&section=header&text=Lista%20de%20Tareas%20JS&fontSize=42&fontAlignY=36&fontColor=ffffff&animation=fadeIn&desc=Task%20Manager%20moderno%20con%20JavaScript&descAlignY=56&descAlign=50" width="100%" alt="Banner animado de Lista de Tareas JS" />
</p>

<p align="center">
  <a href="https://lista-tareas-angel.netlify.app/" target="_blank">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=24&duration=2500&pause=900&color=00D8FF&center=true&vCenter=true&width=900&lines=Task+Manager+con+Vanilla+JavaScript;LocalStorage+%2B+Filtros+%2B+Modo+Oscuro;UI+moderna%2C+animada+y+responsive" alt="Typing SVG" />
  </a>
</p>

<p align="center">
  <a href="https://lista-tareas-angel.netlify.app/">
    <img src="https://img.shields.io/badge/Demo-Online-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Demo online" />
  </a>
  <img src="https://img.shields.io/github/last-commit/angelcamayojm-wq/lista-tareas-js?style=for-the-badge&color=7F00FF" alt="Último commit" />
  <img src="https://img.shields.io/github/repo-size/angelcamayojm-wq/lista-tareas-js?style=for-the-badge&color=00D8FF" alt="Tamaño del repositorio" />
  <img src="https://img.shields.io/badge/Estado-Mejorado-00FFA3?style=for-the-badge" alt="Estado del proyecto" />
</p>

---

## 📝 Descripción

**Lista de Tareas JS** es una aplicación web moderna para gestionar pendientes desde el navegador.  
Está construida con **HTML**, **CSS** y **JavaScript puro**, sin frameworks, e incluye persistencia con `LocalStorage`, filtros, edición de tareas, modo claro/oscuro y animaciones suaves.

<p align="center">
  <a href="https://lista-tareas-angel.netlify.app/">
    <img src="https://img.shields.io/badge/🚀%20Ver%20Proyecto%20en%20Vivo-Click%20aquí-111827?style=for-the-badge" alt="Ver proyecto en vivo" />
  </a>
</p>

---

## 🎬 Vista previa animada

<p align="center">
  <img src="./assets/demo.gif" alt="Demo animada de Lista de Tareas JS" width="780" />
</p>


=======
--

## ✨ Funcionalidades

<table>
  <tr>
    <td>✅ Agregar tareas</td>
    <td>Crea tareas rápidamente desde el input principal.</td>
  </tr>
  <tr>
    <td>🎯 Marcar como completadas</td>
    <td>Cambia el estado de cada tarea con un solo clic.</td>
  </tr>
  <tr>
    <td>✏️ Editar tareas</td>
    <td>Edita una tarea sin borrar ni volver a crearla.</td>
  </tr>
  <tr>
    <td>🗑️ Eliminar tareas</td>
    <td>Borra tareas individuales con animación de salida.</td>
  </tr>
  <tr>
    <td>🔎 Filtrar tareas</td>
    <td>Visualiza todas, pendientes o completadas.</td>
  </tr>
  <tr>
    <td>📊 Progreso visual</td>
    <td>Muestra el porcentaje de tareas completadas.</td>
  </tr>
  <tr>
    <td>🌙 Modo oscuro/claro</td>
    <td>Permite cambiar el tema y guarda la preferencia.</td>
  </tr>
  <tr>
    <td>💾 LocalStorage</td>
    <td>Guarda tareas y configuración en el navegador.</td>
  </tr>
  <tr>
    <td>📱 Diseño responsive</td>
    <td>Se adapta a pantallas móviles y escritorio.</td>
  </tr>
</table>

---

## 🛠️ Tecnologías utilizadas

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111111" alt="JavaScript" />
  <img src="https://img.shields.io/badge/LocalStorage-111827?style=for-the-badge&logo=googlechrome&logoColor=white" alt="LocalStorage" />
</p>

---

## 🧠 ¿Cómo funciona?

```mermaid
flowchart LR
    A[Usuario escribe una tarea] --> B[JavaScript valida el texto]
    B --> C[Se crea un objeto con ID único]
    C --> D[Se renderiza en el DOM]
    D --> E[Se guarda en LocalStorage]
    E --> F[Puede editarse, completarse o eliminarse]
    F --> G[La interfaz actualiza estadísticas y progreso]
```

---

## 📂 Estructura del proyecto

```bash
lista-tareas-js/
│
├── index.html        # Estructura principal de la aplicación
├── style.css         # Estilos, animaciones y diseño responsive
├── script.js         # Lógica de tareas, filtros, tema y LocalStorage
├── assets/
│   ├── demo.gif      # Vista previa animada para el README
│   └── preview.png   # Captura del proyecto
└── README.md         # Documentación del proyecto
```

---

## 🚀 Instalación y uso

```bash
# 1. Clonar el repositorio
git clone https://github.com/angelcamayojm-wq/lista-tareas-js.git

# 2. Entrar a la carpeta del proyecto
cd lista-tareas-js

# 3. Abrir index.html en tu navegador
```

También puedes abrir directamente el archivo `index.html` con doble clic.

---

## 📌 Conceptos practicados

- Manipulación del **DOM**
- Eventos con **addEventListener**
- Validación de formularios
- Persistencia con **LocalStorage**
- Uso de objetos y arrays en JavaScript
- Renderizado dinámico de elementos
- Filtros por estado
- Modo claro/oscuro con variables CSS
- Diseño responsive
- Animaciones con `@keyframes`
- Accesibilidad básica con etiquetas `aria-label`

---

## 🧪 Mejoras futuras

- [ ] Agregar fechas límite para cada tarea
- [ ] Crear categorías o etiquetas
- [ ] Permitir arrastrar y ordenar tareas
- [ ] Agregar búsqueda por texto
- [ ] Exportar tareas en JSON
- [ ] Añadir pruebas básicas de JavaScript

---

## 🤝 Contribuciones

Las ideas, mejoras y sugerencias son bienvenidas.  
Puedes hacer un fork del proyecto, crear una rama y enviar un Pull Request:

```bash
git checkout -b mejora/nueva-funcionalidad
git commit -m "Mejora la experiencia de usuario"
git push origin mejora/nueva-funcionalidad
```

---

## 👨‍💻 Autor

<p align="center">
  <img src="https://avatars.githubusercontent.com/u/245593739?v=4" width="120" style="border-radius: 50%;" alt="Avatar de Angel" />
</p>

<p align="center">
  <strong>Angel Rivera</strong><br />
  Desarrollador en formación, construyendo proyectos web paso a paso 🚀
</p>

<p align="center">
  <a href="https://github.com/angelcamayojm-wq">
    <img src="https://img.shields.io/badge/GitHub-angelcamayojm--wq-181717?style=for-the-badge&logo=github" alt="GitHub de Angel" />
  </a>
</p>

---

## 📄 Licencia

Este proyecto fue creado con fines educativos.  
Para abrirlo formalmente a contribuciones y reutilización, puedes agregar un archivo `LICENSE`, por ejemplo con licencia MIT.

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:00FFA3,50:00D8FF,100:7F00FF&height=120&section=footer" width="100%" alt="Footer animado" />
</p>

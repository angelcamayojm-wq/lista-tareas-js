<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:7F00FF,50:00D8FF,100:00FFA3&height=190&section=header&text=Lista%20de%20Tareas%20JS&fontSize=42&fontAlignY=36&fontColor=ffffff&animation=fadeIn&desc=Organiza%20tus%20pendientes%20desde%20el%20navegador&descAlignY=56&descAlign=50" width="100%" alt="Banner animado de Lista de Tareas JS" />
</p>

<p align="center">
  <a href="https://lista-tareas-angel.netlify.app/" target="_blank">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=24&duration=2500&pause=900&color=00D8FF&center=true&vCenter=true&width=850&lines=App+de+tareas+con+JavaScript;Guarda+tus+tareas+con+LocalStorage;Simple%2C+rapida+y+funcional" alt="Typing SVG" />
  </a>
</p>

<p align="center">
  <a href="https://lista-tareas-angel.netlify.app/">
    <img src="https://img.shields.io/badge/Demo-Online-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Demo online" />
  </a>
  <img src="https://img.shields.io/github/last-commit/angelcamayojm-wq/lista-tareas-js?style=for-the-badge&color=7F00FF" alt="Último commit" />
  <img src="https://img.shields.io/github/repo-size/angelcamayojm-wq/lista-tareas-js?style=for-the-badge&color=00D8FF" alt="Tamaño del repositorio" />
  <img src="https://img.shields.io/badge/Estado-En%20desarrollo-00FFA3?style=for-the-badge" alt="Estado del proyecto" />
</p>

---

## 📝 Descripción

**Lista de Tareas JS** es una aplicación web sencilla, rápida y práctica para gestionar tareas desde el navegador.  
Permite **agregar**, **eliminar** y **guardar tareas automáticamente** usando `LocalStorage`, por lo que tus pendientes se mantienen incluso después de recargar la página.

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

> 💡 **Nota:** si la animación no aparece, asegúrate de subir el archivo `assets/demo.gif` al repositorio.

---

## ✨ Funcionalidades

<table>
  <tr>
    <td>✅ Agregar tareas</td>
    <td>Escribe una tarea y añádela a la lista.</td>
  </tr>
  <tr>
    <td>🗑️ Eliminar tareas</td>
    <td>Borra tareas cuando ya no las necesites.</td>
  </tr>
  <tr>
    <td>💾 Guardado local</td>
    <td>Las tareas se almacenan en el navegador con <code>LocalStorage</code>.</td>
  </tr>
  <tr>
    <td>🔄 Persistencia</td>
    <td>Las tareas se mantienen al recargar la página.</td>
  </tr>
  <tr>
    <td>⚡ Vanilla JS</td>
    <td>Proyecto construido sin frameworks externos.</td>
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
    A[Usuario] --> B[Escribe una tarea]
    B --> C[JavaScript valida el texto]
    C --> D[Se crea un elemento en el DOM]
    D --> E[Se guarda en LocalStorage]
    E --> F[La tarea sigue disponible al recargar]
    F --> G[El usuario puede eliminarla]
```

---

## 📂 Estructura del proyecto

```bash
lista-tareas-js/
│
├── index.html        # Estructura principal de la aplicación
├── style.css         # Estilos visuales de la interfaz
├── script.js         # Lógica para agregar, eliminar y guardar tareas
├── assets/
│   └── demo.gif      # Vista previa animada para el README
└── README.md         # Documentación del proyecto
```

---

## 🚀 Instalación y uso

Sigue estos pasos para ejecutar el proyecto en tu computador:

```bash
# 1. Clonar el repositorio
git clone https://github.com/angelcamayojm-wq/lista-tareas-js.git

# 2. Entrar a la carpeta del proyecto
cd lista-tareas-js

# 3. Abrir index.html en el navegador
```

También puedes abrir directamente el archivo `index.html` con doble clic.

---

## 📌 Conceptos practicados

- Manipulación del **DOM**
- Eventos con **JavaScript**
- Uso de `addEventListener`
- Validación básica de formularios
- Persistencia de datos con `localStorage`
- Conversión de datos con `JSON.stringify()` y `JSON.parse()`

---

## 🧪 Ideas para futuras mejoras

- [ ] Marcar tareas como completadas
- [ ] Editar tareas existentes
- [ ] Agregar filtros: todas, pendientes y completadas
- [ ] Crear modo oscuro
- [ ] Usar IDs únicos para manejar tareas repetidas
- [ ] Agregar animaciones al insertar o eliminar tareas
- [ ] Mejorar accesibilidad con etiquetas ARIA
- [ ] Publicar capturas reales del proyecto

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

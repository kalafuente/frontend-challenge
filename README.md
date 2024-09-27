# Frontend challenge
Para correr el cliente
- Instalar la versión de Node v18.17.0 (usar nvm use 18.17.0 si ya está instalada).
- npm install
- npm run dev 

Para correr el servidor 
- node server/server.js

Para correr los tests
- npm test

# Decisiones tomadas
- Implementación con Next.js: debido a su capacidad para renderizar las páginas en el servidor antes de enviarlas al navegador, lo que mejora el SEO y la experiencia del usuario al reducir el tiempo de carga inicial.
- Implementación de la navegación por teclado de manera accesible y usable, asegurando que los elementos interactivos respeten el orden de los índices de tabulación (tabindex) para una navegación fluida. Además, se ha capturado la tecla "Enter" para permitir la interacción con los elementos sin necesidad de utilizar un mouse, mejorando así la accesibilidad para usuarios que dependen de la navegación por teclado. Esto garantiza que la interfaz sea inclusiva y fácil de usar para todos los usuarios.
- Testeo unitarios con Jest para asegurar que los componentes funcionen. Estas pruebas unitarias permiten identificar y corregir errores en una etapa temprana del desarrollo, lo que mejora la calidad del código y reduce el costo de mantenimiento a largo plazo. Además, si bien no llegué a agregarlo, estaría bueno implementar pruebas E2E con Cypress. Esta herramienta permite simular el comportamiento del usuario en un entorno real, verificando la funcionalidad de la aplicación en su conjunto. Al realizar pruebas integrales, se pueden detectar problemas de usabilidad, flujos de navegación y la interacción entre diferentes componentes de la aplicación.
- Debido a que no había diseños específicos para el viewport mobile, me enfoqué en asegurarme de que la interfaz se viera lo más presentable posible en dispositivos móviles. Mi objetivo era minimizar cualquier aspecto visual negativo y garantizar que la funcionalidad principal se mantuviera intacta en pantallas más pequeñas, pero no pude dedicarle tanto tiempo como hubiera querido.


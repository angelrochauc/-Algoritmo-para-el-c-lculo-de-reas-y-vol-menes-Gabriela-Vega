function mostrarFormulario() {
  const figura = document.getElementById("figura").value;
  const formulario = document.getElementById("formulario");
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  const formularios = {
    cuadrado: `
      <input id="lado" type="number" placeholder="Lado" />
      <button onclick="calcularCuadrado()">Calcular</button>
    `,
    rectangulo: `
      <input id="base" type="number" placeholder="Base" />
      <input id="altura" type="number" placeholder="Altura" />
      <button onclick="calcularRectangulo()">Calcular</button>
    `,
    triangulo: `
      <input id="base" type="number" placeholder="Base" />
      <input id="altura" type="number" placeholder="Altura" />
      <input id="lado1" type="number" placeholder="Lado 1" />
      <input id="lado2" type="number" placeholder="Lado 2" />
      <input id="lado3" type="number" placeholder="Lado 3" />
      <button onclick="calcularTriangulo()">Calcular</button>
    `,
    circulo: `
      <input id="radio" type="number" placeholder="Radio" />
      <button onclick="calcularCirculo()">Calcular</button>
    `,
    cubo: `
      <input id="lado" type="number" placeholder="Lado del cubo" />
      <button onclick="calcularCubo()">Calcular</button>
    `,
    esfera: `
      <input id="radio" type="number" placeholder="Radio de la esfera" />
      <button onclick="calcularEsfera()">Calcular</button>
    `,
    cilindro: `
      <input id="radio" type="number" placeholder="Radio" />
      <input id="altura" type="number" placeholder="Altura" />
      <button onclick="calcularCilindro()">Calcular</button>
    `
  };

  formulario.innerHTML = formularios[figura] || "";
}

function calcularCuadrado() {
  const lado = parseFloat(document.getElementById("lado").value);
  const area = lado ** 2;
  const perimetro = lado * 4;
  mostrarResultado(`Área: ${area} | Perímetro: ${perimetro}`);
}

function calcularRectangulo() {
  const base = parseFloat(document.getElementById("base").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const area = base * altura;
  const perimetro = 2 * (base + altura);
  mostrarResultado(`Área: ${area} | Perímetro: ${perimetro}`);
}

function calcularTriangulo() {
  const base = parseFloat(document.getElementById("base").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const lado1 = parseFloat(document.getElementById("lado1").value);
  const lado2 = parseFloat(document.getElementById("lado2").value);
  const lado3 = parseFloat(document.getElementById("lado3").value);
  const area = (base * altura) / 2;
  const perimetro = lado1 + lado2 + lado3;
  mostrarResultado(`Área: ${area} | Perímetro: ${perimetro}`);
}

function calcularCirculo() {
  const radio = parseFloat(document.getElementById("radio").value);
  const area = Math.PI * radio ** 2;
  const perimetro = 2 * Math.PI * radio;
  mostrarResultado(`Área: ${area.toFixed(2)} | Perímetro: ${perimetro.toFixed(2)}`);
}

function calcularCubo() {
  const lado = parseFloat(document.getElementById("lado").value);
  const volumen = lado ** 3;
  mostrarResultado(`Volumen: ${volumen}`);
}

function calcularEsfera() {
  const radio = parseFloat(document.getElementById("radio").value);
  const volumen = (4 / 3) * Math.PI * radio ** 3;
  mostrarResultado(`Volumen: ${volumen.toFixed(2)}`);
}

function calcularCilindro() {
  const radio = parseFloat(document.getElementById("radio").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const volumen = Math.PI * radio ** 2 * altura;
  mostrarResultado(`Volumen: ${volumen.toFixed(2)}`);
}

function mostrarResultado(texto) {
  document.getElementById("resultado").innerText = texto;
}

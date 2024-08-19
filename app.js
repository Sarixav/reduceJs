// Lista de inventario con cantidades
const inventario = [
    { nombre: 'Camisetas', cantidad: 50 },
    { nombre: 'Pantalones', cantidad: 30 },
    { nombre: 'Zapatos', cantidad: 20 },
    { nombre: 'Sombreros', cantidad: 10 }
];

// Muestra los artículos del inventario en la consola
console.log("Artículos del inventario:");
inventario.forEach(item => {
    console.log(`${item.nombre}: ${item.cantidad}`);
});

// Calcula la cantidad total de artículos usando reduce
const totalArticulos = inventario.reduce((acumulado, item) => acumulado + item.cantidad, 0);

// Muestra el total de artículos en la consola y en la página cuando se hace clic en el botón
document.getElementById('calcularTotal').addEventListener('click', function() {
    console.log("Total de artículos en inventario: " + totalArticulos);
    document.getElementById('total').textContent = totalArticulos;
});

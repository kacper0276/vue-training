<template>
    <div>
        <div v-for="product in products" :key="product.name">
            <p v-if="product.inStock">Nazwa produktu {{ product.name }} Cena: {{ product.price }}</p>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            products: [
                { name: "Produkt A", price: 100, inStock: true },
                { name: "Produkt B", price: 120, inStock: true },
                { name: "Produkt C", price: 10, inStock: false },
                { name: "Produkt D", price: 1020, inStock: false },
                { name: "Produkt E", price: 110, inStock: true },
            ]
        }
    }
}
</script>
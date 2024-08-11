<template>
  <!-- Sekcja szablonu definiująca strukturę HTML komponentu -->

  <div>
    <header>
      <!-- Slot o nazwie "header", który będzie wypełniony 
                 zawartością przekazaną przez komponent nadrzędny -->
      <nav>
        <ul>
          <li><a href="#">Strona główna</a></li>
          <li><a href="#">O nas</a></li>
          <li><a href="#">Kontakt</a></li>
        </ul>
      </nav>
      <slot name="header"></slot>
    </header>

    <!-- Główny domyślny slot dla treści strony -->
    <main>
      <slot></slot>
    </main>

    <!-- Slot o nazwie "footer", który będzie wypełniony zawartością 
            przekazaną przez komponent nadrzędny -->
    <footer>
      <p>My Company Footer</p>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

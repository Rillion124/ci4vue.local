app.directive('clickoutside', {
    // Когда привязанный элемент будет примонтирован в DOM...
    mounted(el, args) {
        // Переключаем фокус на элемент
        const div = el;

        document.addEventListener('click', (e) => {
            const withinBoundaries = e.composedPath().includes(div);

            if (!withinBoundaries) {
                args.value.hideItem()
            }
        })
    }
})
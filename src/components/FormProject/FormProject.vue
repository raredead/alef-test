<template>
    <div class="form-main">
        <form @submit.prevent class="form">
            <div class="form-person">
                <div class="form-person__title title">Персональные данные</div>
                <div class="form-person__inputs inputs-form-person">
                    <div class="inputs-form-person__element">
                        <label for="name" class="inputs-form-person__label">Имя</label>
                        <input type="text" class="inputs-form-person__input" id="name">
                    </div>
                    <div class="inputs-form-person__element">
                        <label for="age" class="inputs-form-person__label">Возраст</label>
                        <input type="text" class="inputs-form-person__input" id="age">
                    </div>
                </div>
            </div>
            <div class="form-kids">
                <div class="form-kids__header">
                    <div class="form-kids__title title">Дети (макс.5)</div>
                    <button class="form-kids__btn" @click="addKids">
                        <img class="form-kids__img" src="@/assets/form/Union.svg" alt="">
                        <span class="form-kids__txt">Добавить ребенка</span>
                    </button>
                </div>
                <div class="form-kids__inputs inputs-form-kids">
                    <template v-for="kid in kids" :key="kid.id">
                        <div class="inputs-form-kids__element">
                            <label for="name" class="inputs-form-kids__label">Имя</label>
                            <input type="text" class="inputs-form-kids__input" id="name" v-model="kid.name">
                        </div>
                        <div class="inputs-form-kids__element">
                            <label for="name" class="inputs-form-kids__label">Возраст</label>
                            <input type="text" class="inputs-form-kids__input" id="name" v-model="kid.age">
                        </div>
                        <button class="inputs-form-kids__btn" @click="removeKid(kid)">Удалить</button>
                    </template>
                    <div v-if="kids.length >= 5">
                        <span>Максимальное количество детей достигнуто</span>
                    </div>
                </div>
            </div>
            <button class="form-main__save">Сохранить</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            kids: []
        };
    },
    methods: {
        addKids() {
            if (this.kids.length < 5) {
                this.kids.push({
                    id: Math.random(),
                    name: '',
                    age: ''
                });
            }
        },
        removeKid(kid) {
            this.kids.splice(this.kids.indexOf(kid), 1);
        }
    }
}
</script>

<style lang="scss" scoped src="./FormProject.scss"/>
<template>
    <div class="header">
        <div class="container">
            <div class="header-main">
                <div class="header-main__logo">
                    <img src="@/assets/header/logo.svg" alt="" class="header-logo">
                </div>
                <div class="header-main__btns btns-header-main">
                    <router-link class="btns-header-main__btn" :to="item.path" v-for="(item, i) of menu" :key="i">{{ item.name }}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const menu = [
    {
        name: 'Форма',
        path: '/'
    },
    {
        name: 'Превью',
        path: '/preview'
    }
]
</script>

<style lang="scss" scoped src="./HeaderProject.scss" />
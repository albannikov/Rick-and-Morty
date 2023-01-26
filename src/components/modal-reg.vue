<script>
    export default {
        name: "ModalWindow",
        data: function () {
            return {
                show: false
            }
        },
        methods: {
            closeModal: function () {
                this.show = false
            }
        }
    }
</script>


<template>
    <div v-if="show" class="modal-shadow" @click.self="closeModal">
        <div class="modal">
            <div class="modal-close" @click="closeModal">&#10006;</div>
            <slot name="title">
                <h3 class="modal-title">Заголовок</h3>
            </slot>
            <slot name="body">
                <div class="modal-content">
                    Дефолтный контент модального окна

                    <div class="login">
    <form name='form-login'>

        <h1>REGISTER</h1>

        <label for="name">Email</label>
        <input type="email" id="name" placeholder="Username" required>

        <label for="pw">Password</label>
        <input type="password"
               id= "pw"
               placeholder="Password" required>

        <ul class="helper-text">
            <li class="length">Must be at least 8 characters long.</li>
            <li class="lowercase">Must contain a lowercase letter.</li>
            <li class="uppercase">Must contain an uppercase letter.</li>
            <li class="special">Must contain a number or special character.</li>
        </ul>
        <input id="rgstr_btn" type="submit" value="Register" onclick="store()">

    </form>
</div>


                </div>
            </slot>
            <slot name="footer">
                <div class="modal-footer">
                    <button class="modal-footer__button" @click="closeModal">
                        Ок
                    </button>
                </div>
            </slot>
        </div>
    </div>
</template>
 

 
<style scoped
       lang="scss">
    .modal-shadow {
        position: absolute;
        top: 0;
        left: 0;
        min-height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.39);
    }
 
    .modal {
        background: #fff;
        border-radius: 8px;
        padding: 15px;
        width: 420px;
        height: 480px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: initial;
 
        &-close {
            border-radius: 50%;
            color: #fff;
            background: #2a4cc7;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 7px;
            right: 7px;
            width: 30px;
            height: 30px;
            cursor: pointer;
        }
 
        &-title {
            color: #0971c7;
        }
 
        &-content {
            margin-bottom: 20px
        }
 
        &-footer {
            &__button {
                background-color: #0971c7;
                color: #fff;
                border: none;
                text-align: center;
                padding: 8px;
                font-size: 17px;
                font-weight: 500;
                border-radius: 8px;
                min-width: 150px;
            }
        }
    }
</style>
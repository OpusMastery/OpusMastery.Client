<template>
    <div class="login">
        <q-card class="employee-card">
            <q-card-section class="text-black card-entry">
                <div class="employee-general-info">
                    <q-avatar rounded size="76px">
                        <img src="https://cdn.quasar.dev/img/avatar.png" alt="Employee avatar">
                    </q-avatar>
                    <div class="text-h6">{{props.name}}</div>
                    <div class="text-subtitle2 text-grey">{{props.position}}</div>
                    <q-btn unelevated rounded color="primary" label="Active" disable />
                </div>
            </q-card-section>

            <q-card-section class="card-entry">
                <div class="employee-contact-info">
                    <div class="text-subtitle1 text-black"> <q-icon :name="matMailOutline" /> &nbsp;{{props.email}}</div>
                    <div class="text-subtitle1 text-black"> <q-icon :name="matPhoneIphone" /> &nbsp;{{props.phone}}</div>
                </div>
            </q-card-section>

            <q-card-section class="card-entry">
                <div class="employee-work-info">
                    <div class="employee-work-info-row">
                        <div class="text-subtitle1 text-black">Department</div>
                        <div class="text-subtitle1 text-black">{{departmentName}}</div>
                    </div>
                    <div class="employee-work-info-row">
                        <div class="text-subtitle1 text-black">Date of joining</div>
                        <div class="text-subtitle1 text-black">{{dateOfJoining}}</div>
                    </div>
                </div>
            </q-card-section>
        </q-card>
    </div>
</template>

<script lang="ts">
import {matMailOutline, matPhoneIphone} from '@quasar/extras/material-icons';

export default {
    props: {
        name: String,
        position: String,
        email: String,
        phone: String,
        departmentName: String,
        dateOfJoining: Date
    },

    setup(props) {
        console.log(props);
        return { props, matMailOutline, matPhoneIphone };
    }
}

</script>
<style lang="sass" scoped>
.employee-card
    width: 100%
    max-width: 328px
    border-radius: 18px

.card-entry
    padding: 0 10px 10px

.employee-general-info
    min-height: 228px
    padding: 22px 0 0
    display: flex
    flex-flow: column wrap
    row-gap: 10px
    align-items: center

.employee-contact-info
    padding: 10px 16px
    border-radius: 18px
    background-color: rgb(196, 151, 91, .2)
    text-align: left

.employee-work-info
    padding: 10px 16px
    border-radius: 18px
    background-color: rgba(191, 167, 249, .2)
    display: flex
    flex-flow: column wrap
    row-gap: 6px

.employee-work-info-row
    display: flex
    justify-content: space-between
</style>

<template>
  <div class="md-container">
    <div class="md-layout md-gutter">
      <div class="md-layout-item"><md-content>
          <div>
            <span class="md-subheading">Flat</span>
            <md-button>Default</md-button>
            <md-button :md-ripple="false">Ripple Off</md-button>
            <md-button class="md-primary">Primary</md-button>
            <md-button class="md-accent">Accent</md-button>
            <md-button disabled>Disabled</md-button>
          </div>
        </md-content></div>
      <div class="md-layout-item"><md-content>
          <div>
            <span class="md-subheading">Raised</span>
            <md-button class="md-raised">Default</md-button>
            <md-button class="md-raised" :md-ripple="false">Ripple Off</md-button>
            <md-button class="md-raised md-primary">Primary</md-button>
            <md-button class="md-raised md-accent">Accent</md-button>
            <md-button class="md-raised" disabled>Disabled</md-button>
          </div>
        </md-content></div>
    </div>

    <div class="md-layout">
      <div class="md-layout-item md-size-50"><md-content class="typography">
          <span class="md-display-4">Display 4</span>
          <span class="md-display-3">Display 3</span>
          <span class="md-display-2">Display 2</span>
          <span class="md-display-1">Display 1</span>
          <span class="md-headline">Headline</span>
          <span class="md-title">Title</span>
          <span class="md-subheading">Subheading</span>
          <span class="md-body-2">Body 2</span>
          <span class="md-body-1">Body 1</span>
          <span class="md-caption">Caption</span>
          <router-link to="/ui-elements/typography">Links</router-link>
          <md-button>Buttons</md-button>
        </md-content></div>
      <div class="md-layout-item md-size-50">
        <md-content>
          <form novalidate class="" @submit.prevent="validateUser">
            <md-card class="">
              <md-card-header>
                <div class="md-title">Users Form</div>
              </md-card-header>
              <md-card-content>
                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('firstName')">
                      <label for="first-name">First Name</label>
                      <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.firstName"
                        :disabled="sending" />
                      <span class="md-error" v-if="!$v.form.firstName.required">The first name is required</span>
                      <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('lastName')">
                      <label for="last-name">Last Name</label>
                      <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="form.lastName"
                        :disabled="sending" />
                      <span class="md-error" v-if="!$v.form.lastName.required">The last name is required</span>
                      <span class="md-error" v-else-if="!$v.form.lastName.minlength">Invalid last name</span>
                    </md-field>
                  </div>
                </div>
                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('gender')">
                      <label for="gender">Gender</label>
                      <md-select name="gender" id="gender" v-model="form.gender" md-dense :disabled="sending">
                        <md-option></md-option>
                        <md-option value="M">M</md-option>
                        <md-option value="F">F</md-option>
                      </md-select>
                      <span class="md-error">The gender is required</span>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('age')">
                      <label for="age">Age</label>
                      <md-input type="number" id="age" name="age" autocomplete="age" v-model="form.age"
                        :disabled="sending" />
                      <span class="md-error" v-if="!$v.form.age.required">The age is required</span>
                      <span class="md-error" v-else-if="!$v.form.age.maxlength">Invalid age</span>
                    </md-field>
                  </div>
                </div>
                <md-field :class="getValidationClass('email')">
                  <label for="email">Email</label>
                  <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email"
                    :disabled="sending" />
                  <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
                  <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
                </md-field>
              </md-card-content>
              <md-progress-bar md-mode="indeterminate" v-if="sending" />
              <md-card-actions>
                <md-button type="submit" class="md-primary" :disabled="sending">Create user</md-button>
              </md-card-actions>
            </md-card>
            <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar>
          </form>
        </md-content>
      </div>
    </div>

    <div class="md-layout md-gutter">
      <div class="md-layout-item"><md-content>
          <md-card>
            <md-card-header>
              <div class="md-title">Card without hover effect</div>
            </md-card-header>
            <md-card-content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed
              accusantium quasi non.
            </md-card-content>
            <md-card-actions>
              <md-button>Action</md-button>
              <md-button>Action</md-button>
            </md-card-actions>
          </md-card>
        </md-content></div>
      <div class="md-layout-item"><md-content>
          <md-card>
            <md-card-header>
              <div class="md-title">Card without hover effect</div>
            </md-card-header>
            <md-card-content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed
              accusantium quasi non.
            </md-card-content>
            <md-card-actions>
              <md-button>Action</md-button>
              <md-button>Action</md-button>
            </md-card-actions>
          </md-card>
        </md-content></div>
      <div class="md-layout-item"><md-content>
          <md-card md-with-hover class="md-primary">
            <md-card-header>
              <div class="md-title">Card with hover effect</div>
            </md-card-header>
            <md-card-content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed
              accusantium quasi non.
            </md-card-content>
            <md-card-actions>
              <md-button>Action</md-button>
              <md-button>Action</md-button>
            </md-card-actions>
          </md-card>
        </md-content></div>
    </div>

    <md-content>
      <md-empty-state md-icon="devices_other" md-label="Create your first project"
        md-description="Creating project, you'll be able to upload your design and collaborate with people.">
        <md-button class="md-primary md-raised">Create first project</md-button>
      </md-empty-state>
    </md-content>

  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import {
  required,
  email,
  minLength,
  maxLength
} from 'vuelidate/lib/validators'
export default {
  name: 'MaterialDemo',
  mixins: [validationMixin],
  data: () => ({
    form: {
      firstName: null,
      lastName: null,
      gender: null,
      age: null,
      email: null,
    },
    userSaved: false,
    sending: false,
    lastUser: null
  }),
  validations: {
    form: {
      firstName: {
        required,
        minLength: minLength(3)
      },
      lastName: {
        required,
        minLength: minLength(3)
      },
      age: {
        required,
        maxLength: maxLength(3)
      },
      gender: {
        required
      },
      email: {
        required,
        email
      }
    }
  },
  methods: {
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },
    clearForm() {
      this.$v.$reset()
      this.form.firstName = null
      this.form.lastName = null
      this.form.age = null
      this.form.gender = null
      this.form.email = null
    },
    saveUser() {
      this.sending = true

      // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
        this.lastUser = `${this.form.firstName} ${this.form.lastName}`
        this.userSaved = true
        this.sending = false
        this.clearForm()
      }, 1500)
    },
    validateUser() {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.saveUser()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.md-layout {}

.md-layout-item {
  .md-content {
    padding: 24px;
  }
}

.md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}

.typography > * {
    margin: .5em 0;
    display: block;
  }
</style>

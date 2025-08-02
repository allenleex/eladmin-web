<template>
  <div class="md-container">
    <!-- <md-content>
      <md-steppers md-alternative>
        <md-step id="first" md-label="First Step">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque
            quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat
            nulla.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque
            quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat
            nulla.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque
            quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat
            nulla.</p>
        </md-step>
        <md-step id="second" md-label="Second Step">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque
            quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat
            nulla.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque
            quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat
            nulla.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque
            quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat
            nulla.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque
            quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat
            nulla.</p>
        </md-step>
        <md-step id="third" md-label="Third Step">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque
            quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat
            nulla.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque
            quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat
            nulla.</p>
        </md-step>
      </md-steppers>
    </md-content> -->

    <md-content>
      <md-table v-model="people" md-card @md-selected="onSelect">
        <md-table-toolbar>
          <h1 class="md-title">With auto select and alternate headers</h1>
        </md-table-toolbar>
        <md-table-toolbar slot="md-table-alternate-header" slot-scope="{ count }">
          <div class="md-toolbar-section-start">{{ getAlternateLabel(count) }}</div>
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button">
              <md-icon>delete</md-icon>
            </md-button>
          </div>
        </md-table-toolbar>
        <md-table-row slot="md-table-row" slot-scope="{ item }" :md-disabled="item.name.includes('Stave')"
          md-selectable="multiple" md-auto-select>
          <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
          <md-table-cell md-label="Email" md-sort-by="email">{{ item.email }}</md-table-cell>
          <md-table-cell md-label="Gender" md-sort-by="gender">{{ item.gender }}</md-table-cell>
          <md-table-cell md-label="Job Title" md-sort-by="title">{{ item.title }}</md-table-cell>
        </md-table-row>
      </md-table>
      <p>
        <md-chip v-for="(item, index) in selected" :key="index" md-clickable class="md-default">
          {{ item.name }}
        </md-chip>
      </p>
    </md-content>

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

    <div class="md-layout md-gutter">
      <div class="md-layout-item md-size-50"><md-content>
          <div>
            <md-field>
              <label>Initial Value</label>
              <md-input v-model="initial"></md-input>
            </md-field>

            <md-field>
              <label>Initial Value (Read Only)</label>
              <md-input v-model="initial" readonly></md-input>
            </md-field>

            <md-field>
              <label>Type here!</label>
              <md-input v-model="type"></md-input>
              <span class="md-helper-text">Helper text</span>
            </md-field>

            <md-field>
              <label>With label</label>
              <md-input v-model="withLabel" placeholder="A nice placeholder"></md-input>
            </md-field>

            <md-field md-inline>
              <label>Inline</label>
              <md-input v-model="inline"></md-input>
            </md-field>

            <md-field>
              <label>Number</label>
              <md-input v-model="number" type="number"></md-input>
            </md-field>

            <md-field>
              <label>Textarea</label>
              <md-textarea v-model="textarea"></md-textarea>
            </md-field>

            <md-field>
              <label>Textarea with Autogrow</label>
              <md-textarea v-model="autogrow" md-autogrow></md-textarea>
            </md-field>

            <md-field>
              <label>Disabled</label>
              <md-input v-model="disabled" disabled></md-input>
            </md-field>
          </div>
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
    lastUser: null,
    initial: 'Initial Value',
    type: null,
    withLabel: null,
    inline: null,
    number: null,
    textarea: null,
    autogrow: null,
    disabled: null,
    selected: [],
    people: [
      {
        name: 'Shawna Dubbin',
        email: 'sdubbin0@geocities.com',
        gender: 'Male',
        title: 'Assistant Media Planner'
      },
      {
        name: 'Odette Demageard',
        email: 'odemageard1@spotify.com',
        gender: 'Female',
        title: 'Account Coordinator'
      },
      {
        name: 'Lonnie Izkovitz',
        email: 'lizkovitz3@youtu.be',
        gender: 'Female',
        title: 'Operator'
      },
      {
        name: 'Thatcher Stave',
        email: 'tstave4@reference.com',
        gender: 'Male',
        title: 'Software Test Engineer III'
      },
      {
        name: 'Clarinda Marieton',
        email: 'cmarietonh@theatlantic.com',
        gender: 'Female',
        title: 'Paralegal'
      }
    ]
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
    },
    onSelect(items) {
      this.selected = items
    },
    getAlternateLabel(count) {
      let plural = ''

      if (count > 1) {
        plural = 's'
      }

      return `${count} user${plural} selected`
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
</style>

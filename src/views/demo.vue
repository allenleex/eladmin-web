<template>
  <div class="md-container">
    <md-content>
      <h1>Buttons</h1>
      <md-button class="md-raised">Default</md-button>
      <md-button class="md-raised" :md-ripple="false">Ripple Off</md-button>
      <md-button class="md-raised md-primary">Primary</md-button>
      <md-button class="md-raised md-accent">Accent</md-button>
      <md-button class="md-raised">Default</md-button>
      <md-button class="md-raised" :md-ripple="false">Ripple Off</md-button>
      <md-button class="md-raised md-primary">Primary</md-button>
      <md-button class="md-raised md-accent">Accent</md-button>
      <md-button class="md-raised" disabled>Disabled</md-button>
      <md-button class="md-dense md-primary">Flat</md-button>
      <md-button class="md-dense md-raised md-primary">Raised</md-button>
    </md-content>

    <md-content>
      <h1>Cards</h1>
      <el-row :gutter="32">
        <el-col :xs="24" :sm="8" :lg="8">
          <md-card md-with-hover>
            <md-ripple>
              <md-card-header>
                <div class="md-title">Card with hover effect</div>
                <div class="md-subhead">It also have a ripple</div>
              </md-card-header>
              <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed
                accusantium quasi non.
              </md-card-content>
              <md-card-actions>
                <md-button>Action</md-button>
                <md-button>Action</md-button>
              </md-card-actions>
            </md-ripple>
          </md-card>
        </el-col>
        <el-col :xs="24" :sm="8" :lg="8">
          <md-card md-with-hover class="md-primary">
            <md-ripple>
              <md-card-header>
                <div class="md-title">Card with hover effect</div>
                <div class="md-subhead">It also have a ripple</div>
              </md-card-header>
              <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed
                accusantium quasi non.
              </md-card-content>
              <md-card-actions>
                <md-button>Action</md-button>
                <md-button>Action</md-button>
              </md-card-actions>
            </md-ripple>
          </md-card>
        </el-col>
        <el-col :xs="24" :sm="8" :lg="8">
          <md-card md-with-hover class="md-accent">
            <md-ripple>
              <md-card-header>
                <div class="md-title">Card with hover effect</div>
                <div class="md-subhead">It also have a ripple</div>
              </md-card-header>
              <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed
                accusantium quasi non.
              </md-card-content>
              <md-card-actions>
                <md-button>Action</md-button>
                <md-button>Action</md-button>
              </md-card-actions>
            </md-ripple>
          </md-card>
        </el-col>
      </el-row>

    </md-content>

    <md-content>
      <el-row :gutter="32">
        <el-col :xs="24" :sm="6" :lg="8">
          <md-list>
            <md-list-item>
              <md-icon>move_to_inbox</md-icon>
              <span class="md-list-item-text">Inbox</span>
            </md-list-item>
            <md-list-item>
              <md-icon>send</md-icon>
              <span class="md-list-item-text">Sent Mail</span>
            </md-list-item>
            <md-list-item>
              <md-icon>delete</md-icon>
              <span class="md-list-item-text">Trash</span>
            </md-list-item>
            <md-list-item>
              <md-icon>error</md-icon>
              <span class="md-list-item-text">Spam</span>
            </md-list-item>
            <md-list-item>
              <md-icon>move_to_inbox</md-icon>
              <span class="md-list-item-text">Inbox</span>
            </md-list-item>
            <md-list-item>
              <md-icon>send</md-icon>
              <span class="md-list-item-text">Sent Mail</span>
            </md-list-item>
            <md-list-item>
              <md-icon>delete</md-icon>
              <span class="md-list-item-text">Trash</span>
            </md-list-item>
            <md-list-item>
              <md-icon>error</md-icon>
              <span class="md-list-item-text">Spam</span>
            </md-list-item>
          </md-list>
        </el-col>
        <el-col :xs="24" :sm="18" :lg="16">
          <md-table v-model="users" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
            <md-table-toolbar>
              <h1 class="md-title">Users</h1>
            </md-table-toolbar>
            <md-table-row slot="md-table-row" slot-scope="{ item }">
              <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
              <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
              <md-table-cell md-label="Email" md-sort-by="email">{{ item.email }}</md-table-cell>
              <md-table-cell md-label="Gender" md-sort-by="gender">{{ item.gender }}</md-table-cell>
              <md-table-cell md-label="Job Title" md-sort-by="title">{{ item.title }}</md-table-cell>
            </md-table-row>
          </md-table>
        </el-col>
      </el-row>
    </md-content>

  </div>
</template>

<script>

export default {
  name: 'Demo',
  components: {
  },
  data: () => ({
    users: [
      {
        id: 1,
        name: 'Shawna Dubbin',
        email: 'sdubbin0@geocities.com',
        gender: 'Male',
        title: 'Assistant Media Planner'
      },
      {
        id: 2,
        name: 'Odette Demageard',
        email: 'odemageard1@spotify.com',
        gender: 'Female',
        title: 'Account Coordinator'
      },
      {
        id: 3,
        name: 'Vera Taleworth',
        email: 'vtaleworth2@google.ca',
        gender: 'Male',
        title: 'Community Outreach Specialist'
      },
      {
        id: 4,
        name: 'Lonnie Izkovitz',
        email: 'lizkovitz3@youtu.be',
        gender: 'Female',
        title: 'Operator'
      },
      {
        id: 5,
        name: 'Thatcher Stave',
        email: 'tstave4@reference.com',
        gender: 'Male',
        title: 'Software Test Engineer III'
      },
      {
        id: 6,
        name: 'Karim Chipping',
        email: 'kchipping5@scribd.com',
        gender: 'Female',
        title: 'Safety Technician II'
      },
      {
        id: 7,
        name: 'Helge Holyard',
        email: 'hholyard6@howstuffworks.com',
        gender: 'Female',
        title: 'Internal Auditor'
      },
      {
        id: 8,
        name: 'Rod Titterton',
        email: 'rtitterton7@nydailynews.com',
        gender: 'Male',
        title: 'Technical Writer'
      },
      {
        id: 9,
        name: 'Gawen Applewhite',
        email: 'gapplewhite8@reverbnation.com',
        gender: 'Female',
        title: 'GIS Technical Architect'
      },
      {
        id: 10,
        name: 'Nero Mulgrew',
        email: 'nmulgrew9@plala.or.jp',
        gender: 'Female',
        title: 'Staff Scientist'
      },
      {
        id: 11,
        name: 'Cybill Rimington',
        email: 'crimingtona@usnews.com',
        gender: 'Female',
        title: 'Assistant Professor'
      },
      {
        id: 12,
        name: 'Maureene Eggleson',
        email: 'megglesonb@elpais.com',
        gender: 'Male',
        title: 'Recruiting Manager'
      },
      {
        id: 13,
        name: 'Cortney Caulket',
        email: 'ccaulketc@cbsnews.com',
        gender: 'Male',
        title: 'Safety Technician IV'
      },
      {
        id: 14,
        name: 'Selig Swynfen',
        email: 'sswynfend@cpanel.net',
        gender: 'Female',
        title: 'Environmental Specialist'
      },
      {
        id: 15,
        name: 'Ingar Raggles',
        email: 'iragglese@cbc.ca',
        gender: 'Female',
        title: 'VP Sales'
      },
      {
        id: 16,
        name: 'Karmen Mines',
        email: 'kminesf@topsy.com',
        gender: 'Male',
        title: 'Administrative Officer'
      },
      {
        id: 17,
        name: 'Salome Judron',
        email: 'sjudrong@jigsy.com',
        gender: 'Male',
        title: 'Staff Scientist'
      },
      {
        id: 18,
        name: 'Clarinda Marieton',
        email: 'cmarietonh@theatlantic.com',
        gender: 'Male',
        title: 'Paralegal'
      },
      {
        id: 19,
        name: 'Paxon Lotterington',
        email: 'plotteringtoni@netvibes.com',
        gender: 'Female',
        title: 'Marketing Assistant'
      },
      {
        id: 20,
        name: 'Maura Thoms',
        email: 'mthomsj@webeden.co.uk',
        gender: 'Male',
        title: 'Actuary'
      }
    ]
  }),
  methods: {
    customSort(value) {
      return value.sort((a, b) => {
        const sortBy = this.currentSort
        if (this.currentSortOrder === 'desc') {
          return a[sortBy].localeCompare(b[sortBy])
        }
        return b[sortBy].localeCompare(a[sortBy])
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.md-card {
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}

.md-list {
  width: 100%;
  display: inline-block;
  vertical-align: top;
  border: 1px solid rgba(#000, .12);
}
</style>

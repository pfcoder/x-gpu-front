<template>
  <section id="hosts">
    <v-parallax dark src="@/assets/img/bgHero.jpg" height="100">
      <div class="svg-border-waves text-white">
        <v-img src="@/assets/img/borderWaves.svg" />
      </div>
    </v-parallax>
    <template>
      <v-card class="mx-auto" max-width="1024">
        <v-card-text>
          <span class="subheading">GPU类型</span>

          <v-chip-group
            v-model="selection"
            active-class="deep-purple--text text--accent-4"
            mandatory
          >
            <v-chip v-for="tag in typeTags" v-bind:key="tag">
              {{ tag }}
            </v-chip>
          </v-chip-group>
        </v-card-text>
      </v-card>
      <br />
      <!-- host list -->
      <div>
        <v-card
          class="mx-auto host-card"
          max-width="1024"
          v-for="host in list"
          v-bind:key="host.id"
        >
          <v-card-title>
            <h2 class="text-h6">{{ host.name }}&nbsp;&nbsp;&nbsp;</h2>
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="16"
            ></v-rating>
            <v-spacer></v-spacer>
            <span class="text-h8">¥{{ host.price }} / 小时</span>
          </v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-card-text>
            <span class="subheading">{{ host.type }}</span>
            <br />
            <span class="subheading">GPU数量：{{ host.gpu_number }}</span>
            <span class="subheading">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span class="subheading">GPU RAM：{{ host.gpu_ram_size }}G</span>
            <br />
            <span class="subheading">CPU：{{ host.cpu_type }}</span>
            <span class="subheading">&nbsp;&nbsp;&nbsp;</span>
            <span class="subheading"
              >CPU核心数量：{{ host.cpu_core_number }}</span
            >
            <span class="subheading">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span class="subheading">RAM：{{ host.ram_size }}G</span>
          </v-card-text>
          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="reserve">
              租这台
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>

      <!-- page info -->
      <div></div>
    </template>
  </section>
</template>

<script>
import { fetchList } from "@/api/host";
export default {
  watch: {},
  methods: {
    getHosts() {
      this.listLoading = true;
      fetchList(this.listQuery).then((response) => {
        this.list = response.data.items;
        this.total = response.data.total;
        this.typeTags = ["all"].concat(response.data.types);

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false;
        }, 1.5 * 1000);
      });
    },
  },

  data() {
    return {
      list: [],
      listQuery: {
        page: 1,
        limit: 20,
        type: "all",
      },
      total: 0,
      typeTags: [],
      selection: 0,
      listLoading: true,
      typeTagsLoading: true,
    };
  },
  created() {
    this.getHosts();
  },
};
</script>

<style>
section {
  position: relative;
}
.host-card {
  margin-top: 10px;
}
</style>

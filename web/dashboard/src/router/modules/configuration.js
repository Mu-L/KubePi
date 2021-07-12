import Layout from "@/business/app-layout/horizontal-layout"

const Configuration = {
  path: "/configuration",
  sort: 2,
  component: Layout,
  name: "Configuration",
  meta: {
    title: "business.configuration.configuration",
    icon: "iconfont iconconfiguration"
  },
  children: [
    {
      path: "/configmaps",
      component: () => import("@/business/configuration/config-maps"),
      name: "ConfigMaps",
      meta: {
        title: "Config Maps",
      }
    },
    {
      path: "/configmaps/create",
      component: () => import("@/business/configuration/config-maps/create"),
      name: "ConfigMapCreate",
      props: true,
      hidden: true,
      meta: {
        activeMenu: "/configmaps"
      }
    },
    {
      path: "/:namespace/configmaps/detail/:name",
      component: () => import("@/business/configuration/config-maps/detail"),
      name: "ConfigMapDetail",
      props: true,
      hidden: true,
      meta: {
        activeMenu: "/configmaps"
      }
    },
    {
      path: "/configmaps/edit/:namespace/:name",
      component: () => import("@/business/configuration/config-maps/edit"),
      name: "ConfigMapEdit",
      props: true,
      hidden: true,
      meta: {
        activeMenu: "/configmaps"
      }
    },
    {
      path: "/secrets",
      component: () => import("@/business/configuration/secrets"),
      name: "Secrets",
      meta: {
        title: "Secrets",
      }
    },
    {
      path: "/:namespace/secrets/detail/:name",
      component: () => import("@/business/configuration/secrets/detail"),
      name: "SecretDetail",
      props: true,
      hidden: true,
      meta: {
        activeMenu: "/secrets"
      }
    },
    {
      path: "/secrets/create",
      component: () => import("@/business/configuration/secrets/create"),
      name: "SecretCreate",
      props: true,
      hidden: true,
      meta: {
        activeMenu: "/secrets"
      }
    },
    {
      path: "/:namespace/secrets/edit/:name",
      component: () => import("@/business/configuration/secrets/edit"),
      name: "SecretEdit",
      props: true,
      hidden: true,
      meta: {
        activeMenu: "/secrets"
      }
    },
    {
      path: "/resourcequotas",
      component: () => import("@/business/configuration/resource-quotas"),
      name: "ResourceQuotas",
      meta: {
        title: "Resource Quotas",
      }
    },
    {
      path: "/:namespace/resourcequotas/detail/:name",
      component: () => import("@/business/configuration/resource-quotas/detail"),
      name: "ResourceQuotaDetail",
      props: true,
      hidden: true,
      meta: {
        activeMenu: "/resourcequotas"
      }
    },
    {
      path: "/resourcequotas/create",
      component: () => import("@/business/configuration/resource-quotas/create"),
      name: "ResourceQuotaCreate",
      props: true,
      hidden: true,
      meta: {
        activeMenu: "/resourcequotas"
      }
    },
    {
      path: "/:namespace/resourcequotas/edit/:name",
      component: () => import("@/business/configuration/resource-quotas/edit"),
      name: "ResourceQuotaEdit",
      props: true,
      hidden: true,
      meta: {
        activeMenu: "/resourcequotas"
      }
    },
    {
      path: "/limitranges",
      component: () => import("@/business/configuration/limit-ranges"),
      name: "LimitRanges",
      meta: {
        title: "Limit Ranges",
      }
    },
    {
      path: "/hpa",
      component: () => import("@/business/configuration/hpa"),
      name: "HPA",
      meta: {
        title: "Horizontal Pod Autoscaler",
      }
    }
  ]
}

export default Configuration

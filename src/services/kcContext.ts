import { createGetKcContext } from "keycloakify/login";

export type KcContextExtension =
// WARNING: It's important to keep in sync the extraThemeProperties declared in the package.json and this type definition.
  | { pageId: "login.ftl"; extraThemeProperties: { foo: string; }; };

//NOTE: In most of the cases you do not need to overload the KcContext, you can
// just call createGetKcContext(...) without type arguments.
// You want to overload the KcContext only if:
// - You have custom plugins that add some values to the context (like https://github.com/micedre/keycloak-mail-whitelisting that adds authorizedMailDomains)
// - You want to add support for extra pages that are not yey featured by default, see: https://docs.keycloakify.dev/contributing#adding-support-for-a-new-page
export const { getKcContext } = createGetKcContext<KcContextExtension>({
  mockData: [
    {
      pageId: "login.ftl"
    }
  ]
});

export const { kcContext} = getKcContext({});


export type KcContext = NonNullable<ReturnType<typeof getKcContext>["kcContext"]>;

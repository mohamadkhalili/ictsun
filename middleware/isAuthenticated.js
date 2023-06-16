export default function({ app,store, redirect }) {
    if (!app.$cookies.get('sessionid')) {
      return redirect("/admin");
    }
}
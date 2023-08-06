# Namaste React 🚀

# Parcel

- Creates a Dev build
- Creates a local server (Hosts in the browser)
- Does HMR (Hot Module Replacement)
  - When you make a change in a file, Parcel automatically updates your code in the browser, for ex: like live Server.
- It does the `HMR` by using an algorithm called
  File Watching Algorithm which is written in `C++`.
- It Caches files when saved in order to facilitate faster builds.
- Image Optimization.
- It minifies , bundles and compresses the files for the production build.
- Consistent Hashing.
- Code Splitting.
- Differential Bundling
  - basically it creates different bundles for older browsers and modern browsers. Since most of the older browsers don't support latest javascript  by providing polyfills.
  - When you use  `<script type="module">` , Parcel automatically generates a `nomodule` fallback for old browsers as well, depending on your browser targets.

    ```html

    ​<script type="module" src="app.c9a6fe.js"></script>
    <script nomodule="" src="app.f7d631.js"></script>
    ```
- Provides Diagnostics
  - If we make an error in our code or configuration, Parcel displays beautiful diagnostics in your terminal and in the browser with a syntax highlighted code frame pointing to the exact location where the error occurred.
- Error Handling.
- HTTPs
  - allows us to host pages using https during  development.By using the  `--https` CLI flag.
- Tree Shaking
  - When we import and export modules in JavaScript, most of the time there is unused code floating around. Tree shaking or dead code elimination means that unused modules will not be included in the bundle during the build process.
- Different  dev and prod bundles.
// vite.config.ts
import { defineConfig } from "file:///D:/Fork/react-2023-q1/node_modules/vite/dist/node/index.js";
import { configDefaults } from "file:///D:/Fork/react-2023-q1/node_modules/vitest/dist/config.js";
import react from "file:///D:/Fork/react-2023-q1/node_modules/@vitejs/plugin-react/dist/index.mjs";
import eslint from "file:///D:/Fork/react-2023-q1/node_modules/vite-plugin-eslint/dist/index.mjs";
var vite_config_default = defineConfig({
  base: "./",
  plugins: [react(), eslint()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    coverage: {
      exclude: [
        ...configDefaults.coverage.exclude || [],
        "src/main.tsx",
        "src/assets",
        "src/interfaces",
        "src/routes",
        "src/pages/error-page"
      ],
      all: true,
      src: ["src"],
      provider: "c8",
      reporter: ["text"]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxGb3JrXFxcXHJlYWN0LTIwMjMtcTFcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXEZvcmtcXFxccmVhY3QtMjAyMy1xMVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovRm9yay9yZWFjdC0yMDIzLXExL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyBjb25maWdEZWZhdWx0cyB9IGZyb20gJ3ZpdGVzdC9jb25maWcnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCBlc2xpbnQgZnJvbSAndml0ZS1wbHVnaW4tZXNsaW50JztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6ICcuLycsXG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBlc2xpbnQoKV0sXG4gIHRlc3Q6IHtcbiAgICBnbG9iYWxzOiB0cnVlLFxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICAgIHNldHVwRmlsZXM6ICcuL3NyYy9zZXR1cFRlc3RzLnRzJyxcbiAgICBjb3ZlcmFnZToge1xuICAgICAgZXhjbHVkZTogW1xuICAgICAgICAuLi4oY29uZmlnRGVmYXVsdHMuY292ZXJhZ2UuZXhjbHVkZSB8fCBbXSksXG4gICAgICAgICdzcmMvbWFpbi50c3gnLFxuICAgICAgICAnc3JjL2Fzc2V0cycsXG4gICAgICAgICdzcmMvaW50ZXJmYWNlcycsXG4gICAgICAgICdzcmMvcm91dGVzJyxcbiAgICAgICAgJ3NyYy9wYWdlcy9lcnJvci1wYWdlJyxcbiAgICAgIF0sXG4gICAgICBhbGw6IHRydWUsXG4gICAgICBzcmM6IFsnc3JjJ10sXG4gICAgICBwcm92aWRlcjogJ2M4JyxcbiAgICAgIHJlcG9ydGVyOiBbJ3RleHQnXSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVQLFNBQVMsb0JBQW9CO0FBQ3BSLFNBQVMsc0JBQXNCO0FBQy9CLE9BQU8sV0FBVztBQUNsQixPQUFPLFlBQVk7QUFHbkIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sU0FBUyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7QUFBQSxFQUMzQixNQUFNO0FBQUEsSUFDSixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsSUFDYixZQUFZO0FBQUEsSUFDWixVQUFVO0FBQUEsTUFDUixTQUFTO0FBQUEsUUFDUCxHQUFJLGVBQWUsU0FBUyxXQUFXLENBQUM7QUFBQSxRQUN4QztBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxLQUFLO0FBQUEsTUFDTCxLQUFLLENBQUMsS0FBSztBQUFBLE1BQ1gsVUFBVTtBQUFBLE1BQ1YsVUFBVSxDQUFDLE1BQU07QUFBQSxJQUNuQjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

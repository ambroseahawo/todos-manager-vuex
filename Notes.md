### State
```
App-level state/data that is shared between components (posts, token, todos)
```

### Getters
```
Getters are functions that return a piece of state or computed values from state.
```

### Actions
```
Actions are functions that cause side effects and can be called by components. (called from components to commit a mutation)
```

### Mutations
```
Mutations are functions that update state. (called from actions to update state)
```

### Modules
```
Modules are functions that contain getters, actions, and mutations. (called from the root module to get the state) e.g posts module, auth module, todos module etc
```
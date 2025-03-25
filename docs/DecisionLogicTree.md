# Decision Logic Tree

Below is the graphical diagram representing the decision logic tree for configuration selection:

```mermaid
flowchart TD
  A[Start]
  B{Decision: Choose Mode}
  C[Mode A]
  D[Mode B]
  E{Decision: Choose Option}
  F[Option 1]
  G[Option 2]
  H[Generate Configuration File]

  A --> B
  B -- "Select Mode A" --> C
  B -- "Select Mode B" --> D
  C --> E
  D --> E
  E -- "Select Option 1" --> F
  E -- "Select Option 2" --> G
  F --> H
  G --> H
```

## Steps Overview

1. Initialize the configuration (Start).
2. Choose between different modes (Mode A or Mode B).
3. Based on the mode, make an additional choice (Option 1 or Option 2).
4. After the decisions, generate and export the configuration file.

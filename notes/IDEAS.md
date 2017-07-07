# Ideas

- Talk about locking deps down. Make opting into the new versions of components
  something the individual teams still control. Gives certainty and allows them
  to update / opt-in on their own schedule.
- Styling:
  - Using sass to compose. CSS-in-JS solves that real problem without having to
    worry about name spacing everything
  - When not a predictable name, how do you apply styles to a child component,
    etc?
    - You shouldn't. That should be a prop which adds a new class or somesuch
      that is styled differently.
    - Protects against leaky styles
    - Makes refactoring easier
    - Makes the component highly reusable
  - How do you do theming? Globals! (The one time they're a good thing)
    - Takes a lot of thought because changing later is very difficult

## Pain points

### Miscommunication

- 2 teams built an update to a header which was functionaly identical, but with different links [fe-co-header shared header thing]. Product team thought this meant 2 different implementations. Ended in 2 PRs being opened on 1 repo with almost identical code, just hours apart, each taking a day to implement. Good opportunity for education to the Product Team, but highlights the need to explain what it means to have many small components to a wider audience.
-

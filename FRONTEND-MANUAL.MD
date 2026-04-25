# Frontend Manual

## Folder Structure:

### Source
#### Components:

`/Abstractions`: Contains all logic used on elements

`/elements`: tiny partitions used everywhere on any composite or elements. Every .jsx has their own css and must have the same name with the folder wheres placed.
```
elements
-------
    |- SomethingSpecific.jsx
    |- SomethingSpecific.css
    |- ...
    |
    |- buttons
    |  -------
    |   |- ButtonDoSomething.jsx
    |   |- ButtonDoSomething.css
    |   |- ...
    |
    |- lists
    |  -------
    |   |- ListShowSomething.jsx
    |   |- ListShowSomething.css
    |   |- ...
    |
    |- ...
```
                    
`/composite`: Things mate by a group of selected elements. Those elements can be on various parts of the site
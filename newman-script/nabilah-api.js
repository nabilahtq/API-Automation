const newman = require("newman")

newman.run({
    collection: "json-collection/collection.json",
    environment: "json-env/environment.json",
    reporters: ["cli", "htmlextra"]
})

var db = require("../models");


module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Product.findOne({
      where: {
        id: Math.floor(Math.random() * 32),
      }
    }).then(function (dbProduct) {
      // if (!dbProduct.image) {
      //   dbProduct.image = "https://via.placeholder.com/350x150"        
      // };
      res.render("index", {
        poster: dbProduct.image,
        releaseYear: Math.floor(Math.random() * (2005 - 1980 + 1)) + 1980,
        genre: "FPS",
        publisher: "Blizzard",
        rating: "9/10",
        price: "$59.99",
        platform: "PC",
        name: dbProduct.name,
        osMin: "Windows Vista/7/ 8/10 64-bit (latest Service Pack)",
        osRec: "Windows Vista/7/ 8/10 64-bit (latest Service Pack)",
        processorMin: "Intel Core i3 or AMD Phenom X3 865",
        processorRec: "Intel Core i5 or AMD Phenom II X3, 2.8 GHz",
        videoMin: "Nvidia GeForce GTX 460, ATI Radeon HD 4850, or Intel HD Graphics 4400",
        videoRec: "Nvidia GeForce GTX 660 or ATI Radeon HD 7950",
        memoryMin: "768 MB VRAM, 4 GB System RAM",
        memoryRec: "2 GB VRAM, 6 GB System RAM",
        storageMin: "7200 RPM with 5 GB available HD space",
        storageRec: "7200 RPM with 5 GB available HD space",
      });
    });
  });


  // profile orders
  app.get("/profile/orders", function (req, res) {
    res.render("orders");
  });

  // profile wishlist
  app.get("/profile/wishlist", function (req, res) {
    res.render("wishlist");
  });

  // PC Games
  app.get("/fullcatalogue/pc", function (req, res) {
    db.Product.findOne({
      where: {
        id: 1,
      }
    }).then(function (dbProduct) {
      // if (!dbProduct.image) {
      //   dbProduct.image = "https://via.placeholder.com/350x150"        
      // };

      res.render("pc", {
        poster: dbProduct.image,
        name: dbProduct.name,
        summary: dbProduct.summary,
      });
    });
  });

  // Playstation4 Games
  app.get("/fullcatalogue/playstation4", function (req, res) {
    db.Product.findOne({
      where: {
        id: 7,
      }
    }).then(function (dbProduct) {
      // if (!dbProduct.image) {
      //   dbProduct.image = "https://via.placeholder.com/350x150"        
      // };

      res.render("playstation4", {
        poster: dbProduct.image,
        name: dbProduct.name,
        summary: dbProduct.summary,
      });
    });
  });

  // Playstation3 Games
  app.get("/fullcatalogue/playstation3", function (req, res) {
    db.Product.findOne({
      where: {
        id: 6,
      }
    }).then(function (dbProduct) {
      // if (!dbProduct.image) {
      //   dbProduct.image = "https://via.placeholder.com/350x150"        
      // };

      res.render("playstation3", {
        poster: dbProduct.image,
        name: dbProduct.name,
        summary: dbProduct.summary,
      });
    });
  });

  // XBOX Games
  app.get("/fullcatalogue/xbox1", function (req, res) {
    db.Product.findOne({
      where: {
        id: 26,
      }
    }).then(function (dbProduct) {
      // if (!dbProduct.image) {
      //   dbProduct.image = "https://via.placeholder.com/350x150"        
      // };

      res.render("xbox1", {
        poster: dbProduct.image,
        name: dbProduct.name,
        summary: dbProduct.summary,
      });
    });
  });

  app.get("/fullcatalogue/xbox360", function (req, res) {
    db.Product.findOne({
      where: {
        id: 20,
      }
    }).then(function (dbProduct) {
      // if (!dbProduct.image) {
      //   dbProduct.image = "https://via.placeholder.com/350x150"        
      // };

      res.render("xbox360", {
        poster: dbProduct.image,
        name: dbProduct.name,
        summary: dbProduct.summary,
      });
    });
  });

  // new releases page
  app.get("/newreleases", function (req, res) {
    db.Product.findOne({
      where: {
        id: 4,
      }
    }).then(function (dbProduct) {
      // if (!dbProduct.image) {
      //   dbProduct.image = "https://via.placeholder.com/350x150"        
      // };

      res.render("newReleases", {
        poster: dbProduct.image,
        name: dbProduct.name,
        summary: dbProduct.summary,
      });
    });
  });
  // Load example page and pass in an example by id

  app.get("/product/:id", function (req, res) {
    db.Product.findOne({ where: { id: req.params.id } }).then(function (dbProduct) {
      res.render("product", {
        product: dbProduct


      });
    });
  });

  // testing page
  app.get("/testing", function (req, res) {
    res.render("test");
  });

  // cart page
  app.get("/cart", function (req, res) {
    res.render("cart");
  });


  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });

}

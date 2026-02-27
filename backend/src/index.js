'use strict'

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application gets registered.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets launched.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    // Seed demo data on first run
    const newsCount = await strapi.db.query('api::news-article.news-article').count()

    if (newsCount === 0) {
      console.log('🌱 Seeding demo data...')

      // Create sample news articles
      await strapi.db.query('api::news-article.news-article').create({
        data: {
          title: 'EDB Launches New Export Financing Facility for Agricultural Sector',
          slug: 'export-financing-agricultural',
          excerpt: 'The Export Development Bank has introduced a specialized financing package to support Sudanese agricultural exporters with competitive rates and flexible terms.',
          content: '## EDB Agricultural Export Finance Program\n\nThe Export Development Bank (EDB) is proud to announce the launch of its new Agricultural Export Finance Program, designed to support Sudanese farmers and agribusinesses in accessing international markets.',
          category: 'Trade Finance',
          author: 'EDB Communications',
          readTime: '3 min read',
          isFeatured: true,
          publishedAt: new Date().toISOString(),
        },
      })

      await strapi.db.query('api::news-article.news-article').create({
        data: {
          title: 'Mobile Banking App Now Available for Corporate Clients',
          slug: 'mobile-banking-corporate',
          excerpt: 'EDB unveils its upgraded mobile banking application featuring enhanced security, real-time transactions, and improved user experience for corporate clients.',
          content: '## EDB Mobile Banking for Corporate Clients\n\nWe are excited to announce the launch of our upgraded corporate mobile banking application.',
          category: 'Digital Banking',
          author: 'EDB Digital Team',
          readTime: '2 min read',
          publishedAt: new Date().toISOString(),
        },
      })

      // Create sample exchange rates
      const currencies = [
        { currency: 'US Dollar', code: 'USD', buyRate: 598.50, sellRate: 602.50 },
        { currency: 'Euro', code: 'EUR', buyRate: 648.30, sellRate: 653.30 },
        { currency: 'British Pound', code: 'GBP', buyRate: 753.80, sellRate: 758.80 },
        { currency: 'Saudi Riyal', code: 'SAR', buyRate: 159.60, sellRate: 160.60 },
        { currency: 'UAE Dirham', code: 'AED', buyRate: 163.00, sellRate: 164.00 },
        { currency: 'Egyptian Pound', code: 'EGP', buyRate: 12.10, sellRate: 12.50 },
      ]

      for (const rate of currencies) {
        await strapi.db.query('api::exchange-rate.exchange-rate').create({
          data: { ...rate, date: new Date().toISOString().split('T')[0], isActive: true },
        })
      }

      // Create sample services
      const services = [
        { title: 'Corporate Banking', slug: 'corporate-banking', shortDescription: 'End-to-end financial solutions for businesses', icon: 'building', isHighlighted: true, order: 1 },
        { title: 'Trade Finance', slug: 'trade-finance', shortDescription: 'Import/export financing solutions', icon: 'anchor', isHighlighted: true, order: 2 },
        { title: 'Export Finance', slug: 'export-finance', shortDescription: 'Dedicated export development support', icon: 'globe', isHighlighted: true, order: 3 },
        { title: 'Digital Banking', slug: 'digital-banking', shortDescription: 'Modern online banking platform', icon: 'smartphone', isHighlighted: false, order: 4 },
      ]

      for (const service of services) {
        await strapi.db.query('api::service.service').create({
          data: {
            ...service,
            description: `${service.title} solutions from EDB.`,
            features: ['Feature 1', 'Feature 2', 'Feature 3'],
            publishedAt: new Date().toISOString(),
          },
        })
      }

      // Create sample branches
      await strapi.db.query('api::branch.branch').create({
        data: {
          name: 'Head Office',
          address: 'EDB Building, Nile Street',
          city: 'Khartoum',
          phone: '+249 183 000 000',
          email: 'hq@edb.sd',
          hours: 'Sunday–Thursday, 8AM–4PM',
          isHeadOffice: true,
          publishedAt: new Date().toISOString(),
        },
      })

      console.log('✅ Demo data seeded successfully!')
    }
  },
}

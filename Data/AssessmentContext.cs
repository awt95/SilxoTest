using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SilxoTest.Models;

    public class AssessmentContext : DbContext
    {
        public AssessmentContext (DbContextOptions<AssessmentContext> options)
            : base(options)
        {
        }

        public DbSet<SilxoTest.Models.Assessment> Assessment { get; set; }
    }

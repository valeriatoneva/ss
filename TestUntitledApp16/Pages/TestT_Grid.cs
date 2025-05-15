using Bunit;
using Microsoft.Extensions.DependencyInjection;
using UntitledApp16.Pages;
using UntitledApp16.Northwind;

namespace TestUntitledApp16
{
  [Collection("UntitledApp16")]
  public class TestT_Grid
  {
    [Fact]
    public void ViewIsCreated()
    {
      using var ctx = new TestContext();
      ctx.JSInterop.Mode = JSRuntimeMode.Loose;
      ctx.Services.AddIgniteUIBlazor(
        typeof(IgbTreeGridModule));
      ctx.Services.AddScoped<INorthwindService>(sp => new MockNorthwindService());
      var componentUnderTest = ctx.RenderComponent<T_Grid>();
      Assert.NotNull(componentUnderTest);
    }
  }
}

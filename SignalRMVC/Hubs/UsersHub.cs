using Microsoft.AspNetCore.SignalR;

namespace SignalRMVC.Hubs;

public class UsersHub : Hub
{
    public static int TotalViews { get; set; } = 0;

    public async Task NewWindowLoaded()
    {
        TotalViews++;
        await Clients.All.SendAsync("updateTotalViews",TotalViews);
    }
}
